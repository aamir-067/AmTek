import React from 'react'
import 'reactjs-popup/dist/index.css';
import store from '../../app/store';

const PopUp = ({ setIsDone }) => {
    const { tokenSupply } = store.getState()
    console.log(tokenSupply)
    // return (
    //     <div className="modal">
    //         <button className="close" onClick={() => { }}>
    //             &times;
    //         </button>
    //         <div className="header"> NFT Minted Succensffly </div>
    //         <div className="content">
    //             <div className='w-full flex my-6 flex-warp justify-center gap-8 items-center'>
    //                 <h2>Token Contract Address : </h2>
    //                 <h2>0x00987987</h2>
    //             </div>
    //             <div className='w-full flex flex-warp justify-center gap-8 items-center'>
    //                 <h2>token id : </h2>
    //                 <h2>34</h2>
    //             </div>

    //         </div>
    //         <div className="actions">
    //             <button
    //                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //                 onClick={() => {
    //                     setIsDone(false);
    //                 }}
    //             >
    //                 Copy address
    //             </button>
    //         </div>
    //     </div>
    // )
    return (
        <div className={`fixed inset-0  flex items-center justify-center`}>
            <div className="bg-white z-50 dark:bg-slate-900 text-slate-900 rounded-lg p-8 shadow-lg">
                <div className="flex flex-col justify-center items-center">
                    <h2 className='font-bold text-xl '>NFT Minted Successfully</h2>
                    <hr className='border border-black w-full mt-2' />
                    <div className='w-full flex my-6 flex-warp justify-center gap-8 items-center'>
                        <h2 className='capitalize'>Contract Address : </h2>
                        <h2>0x298e0222Bf6B368D0882c706065e59e58ade3B53</h2>
                    </div>
                    <div className='w-full flex flex-warp justify-center gap-8 items-center'>
                        <h2 className='capitalize '>token id : </h2>
                        <h2>{tokenSupply.currentToken}</h2>
                    </div>

                </div>

                <div className='flex justify-center'>
                    <button
                        onClick={() => {
                            window.navigator.clipboard.writeText('0x298e0222Bf6B368D0882c706065e59e58ade3B53');
                            setIsDone(false);
                        }}
                        className="mt-4 cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                        Copy address
                    </button>
                </div>

            </div>
        </div>
    )
}

export default PopUp