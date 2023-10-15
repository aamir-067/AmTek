import { ethers } from "ethers";
import Amtek from '../artifacts/AmTek.json'
import store from "../app/store";
import { setupWeb3 } from "../reducers/web3ApiReducer";

export const initWeb3 = async () => {
    try {
        if (window.ethereum) {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const contract = new ethers.Contract("0x06Be36c059A9B74C2f0b38cD18040ACeE258eF09", Amtek.abi, signer);
            window.ethereum.on('chainChanged', async () => {
                await initWeb3()
            });
            window.ethereum.on('accountsChanged', async () => {
                await initWeb3()
            });
            store.dispatch(setupWeb3({ contract, provider, signer }));
        } else {
            console.error('please install metamask');
            return { contract: null, provider: null, signer: null }
        }
    } catch (e) {
        console.error(e);
    }
};
