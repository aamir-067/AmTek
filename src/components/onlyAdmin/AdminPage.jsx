import React from 'react'
import PreSale from './PreSale'
import SpecialMint from './SpecialMint'
import MintStatus from './MintStatus'
import Payments from './Payments'

const AdminPage = () => {
    return (
        <div className='w-screen mt-20 flex justify-center items-center bg-white dark:bg-slate-900 dark:text-slate-100 text-slate-900'>
            <div className='w-7/12 flex flex-col justify-center items-center shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]'>
                <h2 className='text-4xl font-bold mt-5'>Admin Dashboard</h2>
                <PreSale />

                <SpecialMint />

                <MintStatus />

                <Payments />

            </div>
        </div>
    )
}

export default AdminPage