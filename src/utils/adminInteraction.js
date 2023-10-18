import { ethers } from "ethers";
import store from "../app/store";
import { setPreSaleStatue } from "../reducers/preSaleReducer";

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
    const { web3Api } = store.getState();
    try {
        if (web3Api) {
            const res = await web3Api.contract.schedulePreSale(time);
            await res.wait();
            console.log('pre sale scheduled', res);
            // update the schedule time
            const { preSaleStatus } = store.getState();
            store.dispatch(setPreSaleStatue({ scheduleTime: time, ...preSaleStatus }));
            setTimeout(async () => {
                const res = await startPreSale();
                return res;
            }, time);

        } else {
            console.error('please connect to metamask');
            return false;
        }
    } catch (e) {
        console.error(e);
        return false;
    }
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
            console.log('check special person response ==> ', res);
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

export const getContractBalance = async () => {
    const { web3Api } = store.getState();
    try {
        if (web3Api.signer) {
            const res = await web3Api.provider.getBalance(web3Api.contract.target);
            console.log('contract address ==>', web3Api.contract.target);
            console.log('contract balance ==> ', ethers.toNumber(res));
            return ethers.formatEther(res);
        } else {
            console.error('please connect to metamask');
            return 'unknown';
        }
    } catch (e) {
        console.error(e);
        return 'unknown';
    }
}


// minting status funss.


export const getMintingStatus = async () => {

}

export const changeMintPrice = async ({ price }) => {
    const { web3Api } = store.getState();
    try {
        if (web3Api.signer) {
            const res = await web3Api.contract.changePrice(ethers.parseEther(price));
            await res.wait();
            console.log('mint price changed', res);
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