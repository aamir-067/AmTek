import React from 'react'

const Payments = () => {
    return (
        <div className='w-10/12 my-5 mb-10'> {/* Payments */}
            <h2 className='text-2xl font-bold text-center my-3'>Payments Section</h2>

            <div className='w-10-12 flex justify-center gap-10 my-5 items-center'>
                <h2 className='font-bold text-lg'>Balance : {0.003} eth</h2>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Withdraw balance</button>
            </div>

        </div>
    )
}

export default Payments