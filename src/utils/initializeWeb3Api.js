import { ethers } from "ethers";
import Amtek from '../artifacts/AmTek.json'
import store from "../app/store";
import { setupWeb3 } from "../reducers/web3ApiReducer";
import { setSupply } from "../reducers/supplyReducer";
import { getMaxSupply, getTotalSupply } from "./getSupply";
import { setNftPrice } from "../reducers/priceReducer";
import { getPreSaleStatus } from "./adminInteraction";
import { setPreSaleStatue } from "../reducers/preSaleReducer";

export const initWeb3 = async () => {
    try {
        if (window.ethereum) {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const contract = new ethers.Contract("0x298e0222Bf6B368D0882c706065e59e58ade3B53", Amtek.abi, signer);
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
                    store.dispatch(setNftPrice({ price: 0.001 }));
                }
            })
            //by default check the status.  and also update the pre sale status.
            const updates = await getPreSaleStatus() // 0 -> not started 1 -> started 2 -> ended
            const { preSaleStatus } = store.getState();

            if (updates === 1) {  // ==> pre sale started
                // price == 0.00031
                store.dispatch(setNftPrice({ price: 0.00031 }))
                store.dispatch(setPreSaleStatue({ ...preSaleStatus, status: "In progress" }));
            } else if (updates === 2) { // ==> pre sale ended.
                store.dispatch(setPreSaleStatue({ ...preSaleStatus, status: "Ended" }));
            } else if (updates === 0) { // ==> pre sale not started.
                store.dispatch(setPreSaleStatue({ ...preSaleStatus, status: "Not started" }));
            }


        } else {
            console.error('please install metamask');
            return { contract: null, provider: null, signer: null }
        }
    } catch (e) {
        console.error(e);
    }
};
