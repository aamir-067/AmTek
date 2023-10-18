import { ethers } from "ethers";
import Amtek from '../artifacts/AmTek.json'
import store from "../app/store";
import { setupWeb3 } from "../reducers/web3ApiReducer";
import { setSupply } from "../reducers/supplyReducer";
import { setNftPrice } from "../reducers/priceReducer";
import { getPreSaleStatus, startPreSale } from "./adminInteraction";
import { setPreSaleStatue } from "../reducers/preSaleReducer";

export const initWeb3 = async () => {
    try {
        if (window.ethereum) {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const contract = new ethers.Contract("0x2255cCd55d456E467061673A27dDcA1B3092Aa46", Amtek.abi, signer);
            window.ethereum.on('chainChanged', async () => {
                await initWeb3()
            });
            window.ethereum.on('accountsChanged', async () => {
                await initWeb3()
            });



            // store the web3Api in the store
            await store.dispatch(setupWeb3({ contract, provider, signer }));


            // to setup the circulatingSupply
            await contract.on('Transfer', async (res) => {
                console.log('token minted', ethers.toNumber(res));
                const { tokenSupply } = store.getState()
                console.log(tokenSupply);
                await store.dispatch(setSupply({ totalSupply: ethers.toNumber(res), ...tokenSupply }));
            })

            // listen to the updates on event "PreSaleUpdate"
            // event listen
            await contract.on('PreSaleUpdate', async (res) => {
                console.log('PreSaleUpdate response ==>', ethers.toNumber(res));
                if (updates === 1) {  // ==> pre sale started
                    // price == 0.00031
                    store.dispatch(setNftPrice({ price: 0.00031 }))
                } else { // ==> pre sale ended.
                    // update the price from the contract . i removed it from here cause it is already updated below in line 71, 72.
                }
            })
            //by default check the status.  and also update the pre sale status.
            const updates = await getPreSaleStatus() // 0 -> not started 1 -> started 2 -> ended
            const { preSaleStatus } = store.getState();
            console.log("presale status ==>", updates);
            if (updates === 1) {  // ==> pre sale started
                // price == 0.00031
                store.dispatch(setNftPrice({ price: 0.00031 }))
                store.dispatch(setPreSaleStatue({ ...preSaleStatus, status: "In progress" }));
            } else if (updates === 2) { // ==> pre sale ended.
                store.dispatch(setPreSaleStatue({ ...preSaleStatus, status: "Ended" }));
            } else if (updates === 0) { // ==> pre sale not started.
                store.dispatch(setPreSaleStatue({ ...preSaleStatus, status: "Not started" }));
            }


            // check for price change.
            contract.on("PriceChange", async (res) => {
                console.log('price changed new price is ==> ', ethers.formatEther(res));
                store.dispatch(setNftPrice({ price: ethers.toNumber(ethers.formatEther(res)) }));
            })

            // get price initially.
            const price = await contract.nftPrice()
            store.dispatch(setNftPrice({ price: Number(ethers.formatEther(price)) }));


            // get the pre-sale scheduled time.
            const time = await contract.preSaleEndTime();  // its actually pre-sale start time.
            const timeInNum = ethers.toNumber(time);
            console.log('pre-sale starts after ==> ', Math.floor(timeInNum - (Date.now() / 1000)));

            if (timeInNum) {
                store.dispatch(setPreSaleStatue({ scheduleTime: Math.floor(timeInNum - (Date.now() / 1000)), ...preSaleStatus }))
            }


            // start scheduling the pre-sale if signer is admin.
            const currentTime = Date.now() / 1000;
            if (signer.address === '0x575cA73E642983fF8818F0cb0Fa692A788Bc45A4' && currentTime < timeInNum) {  // its admin and time is not ended yet.
                alert(' pre-sale scheduled');
                await contract.schedulePreSale(Math.floor(timeInNum - (Date.now() / 1000)));
                setTimeout(async () => {
                    const res = await startPreSale();
                    return res;
                }, Math.floor(timeInNum - (Date.now() / 1000)));
            }

        } else {
            console.error('please install metamask');
            return { contract: null, provider: null, signer: null }
        }
    } catch (e) {
        console.error(e);
    }
};
