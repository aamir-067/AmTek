import { ethers } from "ethers";
import store from "../app/store";
import { setSupply } from "../reducers/supplyReducer";

export const buyNft = async () => {
    const { web3Api } = store.getState();
    try {
        if (web3Api) {
            const res = await web3Api.contract.publicMint({ value: ethers.parseEther("0.001") });  // default price;
            // call totalSupply() for the current token id.
            await res.wait();
            // const mytokenId = await web3Api.contract.totalSupply();
            // const { tokenSupply } = store.getState()
            // store.dispatch(setSupply({ ...tokenSupply, currentToken: ethers.toNumber(mytokenId) }));
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
// const mint = async ({ address, uri }) => {
//     try {
//         console.log(address);
//         const res = await web3Api.contract.minNft(address, uri);
//         await res.wait();
//         //   toast.success('NFT minted successfully', {
//         //     position: "top-right",
//         //     autoClose: 5000,
//         //     hideProgressBar: false,
//         //     closeOnClick: true,
//         //     pauseOnHover: true,
//         //     draggable: true,
//         //     progress: undefined,
//         //     theme: "light",
//         //   });
//         const mytoken = await getCurrentTokenId({ contract: web3Api.contract });
//         setMyToken(mytoken);
//     } catch (e) {
//         console.error(e);
//     }
// }