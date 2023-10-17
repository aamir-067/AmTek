import React from 'react'

const SpecialMint = () => {
    return (
        <div className='w-10/12 my-5 mb-10'> {/* special mintings */}
            <h2 className='text-2xl font-bold text-center my-3'>Special Mintings Section</h2>
            <form className='w-full flex justify-between items-center' action=""> {/*add to special list */}
                <input
                    required
                    className="flex h-10 mx-2 w-full border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Add to special minting"
                    id="name"
                />
                <button type='button' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
            </form>

            <form className='w-full my-5 flex-col flex justify-between items-center' action=""> {/*check person if in special */}
                <input
                    required
                    className="flex h-10 mx-2 w-full border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Check person specially minting availability"
                    id="name"
                />
                <button type='button' className="text-white my-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Check address</button>
            </form>

            <div className='w-10-12 flex justify-center gap-5 items-center'>
                <h2 className="dark:text-white text-lg font-bold px-4 py-2 text-center mr-3 md:mr-0 dark:bg-slate-900">Check Pre-sale status : </h2>
                <h2 className='font-bold text-lg '>not available</h2>
            </div>
        </div>
    )
}

export default SpecialMint