import { ethers } from "ethers";
import store from "../app/store";

export const buyNft = async () => {
    const { web3Api } = store.getState();
    try {
        if (web3Api) {
            const res = await web3Api.contract.publicMint({ value: ethers.parseEther("0.001") });  // default price;
            // call totalSupply() for the current token id.
            await res.wait();
            console.log('token minted successfully');



        } else {
            console.error('please connect to metamask');
            return;
        }
    } catch (e) {
        console.error(e);
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