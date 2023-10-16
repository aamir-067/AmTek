import { ethers } from "ethers";
import store from "../app/store";


// only on the web3 init.
export const getMaxSupply = async () => {
    const { web3Api } = store.getState()
    try {
        if (web3Api.signer) {
            const res = await web3Api.contract.maxSupply();
            return ethers.toNumber(res);
        } else {
            console.error('please install metamask')
            return 0;
        }
    } catch (e) {
        console.error(e)
        return 0;
    }
}

// call for total on web3 init and call for current token id web nft in minted.
export const getTotalSupply = async () => {
    const { web3Api } = store.getState()
    try {
        if (web3Api.signer) {
            const res = await web3Api.contract.totalSupply();
            return ethers.toNumber(res);
        } else {
            console.error('please install metamask')
            return 0;
        }
    } catch (e) {
        console.error(e)
        return 0;
    }
}

