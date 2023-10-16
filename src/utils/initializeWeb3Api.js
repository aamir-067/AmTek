import { ethers } from "ethers";
import Amtek from '../artifacts/AmTek.json'
import store from "../app/store";
import { setupWeb3 } from "../reducers/web3ApiReducer";
import { setSupply } from "../reducers/supplyReducer";
import { getMaxSupply, getTotalSupply } from "./getSupply";

export const initWeb3 = async () => {
    try {
        if (window.ethereum) {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const contract = new ethers.Contract("0x78b9dF882bd75Ff03B6f78213FBf64aD859f67ac", Amtek.abi, signer);
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
                //deploy contract and update contract address then checnk it again.
                await store.dispatch(setSupply({ totalSupply: ethers.toNumber(res), ...tokenSupply }));
            })
        } else {
            console.error('please install metamask');
            return { contract: null, provider: null, signer: null }
        }
    } catch (e) {
        console.error(e);
    }
};
