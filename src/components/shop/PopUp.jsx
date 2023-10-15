import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const PopUp = () => {
    return (
        <Popup
            trigger={<button className="button"> Open Modal </button>}
            modal
            nested
        >
            {close => (
                <div className="modal">
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                    <div className="header"> NFT Minted Succensffly </div>
                    <div className="content">
                        <div className='w-full flex my-6 flex-warp justify-center gap-8 items-center'>
                            <h2>Token Contract Address : </h2>
                            <h2>0x00987987</h2>
                        </div>
                        <div className='w-full flex flex-warp justify-center gap-8 items-center'>
                            <h2>token id : </h2>
                            <h2>34</h2>
                        </div>

                    </div>
                    <div className="actions">
                        <button
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={() => {
                                close();
                            }}
                        >
                            Copy address
                        </button>
                    </div>
                </div>
            )}
        </Popup>
    )
}

export default PopUp