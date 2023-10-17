import { ethers } from "ethers";
import store from "../app/store";

export const buyNft = async () => {
    const { web3Api, nftprice } = store.getState();
    try {
        if (web3Api) {
            const res = await web3Api.contract.publicMint({ value: ethers.parseEther(`${nftprice.price}`) });  // default price;
            await res.wait();
            console.log('token minted successfully');
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


// gives me amount error message works in remix. not working here.
export const buySpecialNft = async () => {
    const { web3Api } = store.getState();
    try {
        if (web3Api) {

            const res = await web3Api.contract.specialMint({ value: ethers.parseEther('0.0003') });  // special price;
            await res.wait();
            console.log('token minted successfully');
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
