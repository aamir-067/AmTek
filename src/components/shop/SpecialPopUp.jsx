import React from 'react'

const SpecialPopUp = ({ setSpecialPopup }) => {
    return (
        <div className={`sticky top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4  flex items-center justify-center`}>
            <div className="bg-white z-50 dark:bg-slate-900 text-slate-900 rounded-lg p-8 shadow-lg">
                <div className="flex flex-col justify-center items-center">
                    <h2 className='font-bold text-xl '>Error Ocurred</h2>  {/* heading*/}
                    <hr className='border border-black w-full mt-2' />
                    <h2 className='my-4'>We are really sorry, you are not in special list</h2>
                    <h2 className='my-4'>To add in special persons list please contact admins.</h2>
                </div>

                <div className='flex justify-center'>
                    <button
                        onClick={() => {
                            setSpecialPopup(false);
                        }}
                        className="cursor-pointer bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                        Close
                    </button>
                </div>

            </div>
        </div>
    )
}

export default SpecialPopUp 