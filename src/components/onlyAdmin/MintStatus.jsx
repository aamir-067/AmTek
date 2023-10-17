import React from 'react'

const MintStatus = () => {
    return (
        <div className='w-10/12 my-5 mb-10'> {/* MintStatus */}
            <h2 className='text-2xl font-bold text-center my-3'>Minting Control Section</h2>

            <div className='w-10-12 flex justify-center gap-10 my-5 items-center'>
                <h2 className='font-bold text-lg'>Minting Status : unPaused</h2>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Change Status</button>
            </div>
            <form className='w-full my-5 flex flex-col gap-5 justify-between items-center' action=""> {/*change the nft price */}
                <input
                    required
                    className="flex h-10 mx-2 w-full border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Enter new NFT Mint Price"
                    id="name"
                />
                <button type='button' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Change Price</button>
            </form>

        </div>
    )
}

export default MintStatus