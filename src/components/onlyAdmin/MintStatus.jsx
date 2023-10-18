import React, { useEffect } from 'react'
import { changeMintPrice } from '../../utils/adminInteraction'
import store from '../../app/store';

const MintStatus = () => {
    const [nftPrice, setNftPrice] = React.useState('0');
    const newPrice = React.useRef();
    useEffect(() => {
        const { nftprice } = store.getState();
        setNftPrice(nftprice.price);
    })
    const handlePriceChange = async (e) => {
        e.preventDefault();
        if (Number(newPrice.current.value) < 0) {
            alert('Please enter a valid price');
            return;
        }
        const res = await changeMintPrice({ price: newPrice.current.value });
        if (!res) return;
        alert('Price changed');
    }

    return (
        <div className='w-10/12 my-5 mb-10'> {/* MintStatus */}
            <h2 className='text-2xl font-bold text-center my-3'>Minting Control Section</h2>

            <div className='w-10-12 flex justify-center gap-10 my-5 items-center'>
                <h2 className='font-bold text-lg'>Minting Status : unPaused</h2>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Change Status</button>
            </div>
            <h2 className='text-lg font-bold text-center'>Current NFT Price : {nftPrice}</h2>
            <form className='w-full my-5 flex flex-col gap-5 justify-between items-center' onSubmit={(e) => handlePriceChange(e)}> {/*change the nft price */}
                <input
                    required
                    className="flex h-10 mx-2 w-full border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    ref={newPrice}
                    placeholder="Enter new NFT Mint Price in eth"
                    id="name"
                />
                <button type='button' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Change Price</button>
            </form>

        </div>
    )
}

export default MintStatus