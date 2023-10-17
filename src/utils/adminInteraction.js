import { ethers } from "ethers";
import store from "../app/store";

export const getPreSaleStatus = async () => {
    const { web3Api } = store.getState();
    try {
        if (web3Api) {
            const res = await web3Api.contract.tokenPreSale();
            // 0 -> not started
            // 1 -> in progress
            // 2 -> ended
            return ethers.toNumber(res);

        } else {
            console.error('please connect to metamask');
            return 0;
        }
    } catch (e) {
        console.error(e);
        return 0;
    }
}

export const schedulePreSale = async ({ time }) => {
    // store the presale time.
    setTimeout(async () => {
        const res = await startPreSale();
        return res;
    }, time);
}

export const startPreSale = async () => {
    const { web3Api } = store.getState();
    try {
        if (web3Api) {
            const res = await web3Api.contract.startPreSale();
            await res.wait();
            console.log('pre sale started', res);
            return true;

            // to change the status of the pre sale listen to the event "PreSaleUpdate"
        } else {
            console.error('please connect to metamask');
            return false;
        }
    } catch (e) {
        console.error(e);
        return false;
    }
}
export const EndPreSales = async () => {
    const { web3Api } = store.getState();
    try {
        if (web3Api.signer) {
            const res = await web3Api.contract.endPreSale();
            await res.wait();
            console.log('pre sale ended', res);
            return true;
        } else {
            console.error('please connect to metamask');
            return false;
        }
    } catch (e) {
        console.error(e);
        return false;
    }
}


// add to special.
export const addToSpecial = async ({ _peer }) => {
    const { web3Api } = store.getState();
    try {
        if (web3Api.signer) {
            const res = await web3Api.contract.addToSpecial(_peer);
            await res.wait();
            console.log('special added', res);
            return true;
        } else {
            console.error('please connect to metamask');
            return false;
        }
    } catch (e) {
        console.error(e);
        return false;
    }
}

export const checkSpecialPerson = async ({ _peer }) => {
    const { web3Api } = store.getState();
    try {
        if (web3Api.signer) {
            const res = await web3Api.contract.specialPersons(_peer);
            return res;
        } else {
            console.error('please connect to metamask');
            return false;
        }
    } catch (e) {
        console.error(e);
        return false;
    }
}

export const getContractBalance = async ({ address }) => {
    const { web3Api } = store.getState();
    try {
        if (web3Api.signer) {
            const res = await web3Api.provider.getBalance(address);
            return ethers.formatEther(res);
        } else {
            console.error('please connect to metamask');
            return false;
        }
    } catch (e) {
        console.error(e);
        return false;
    }
}


// minting status funss.


export const getMintingStatus = async () => {

}