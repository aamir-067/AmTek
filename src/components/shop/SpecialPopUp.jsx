import React from 'react'

const SpecialPopUp = ({ heading, text, setSpecialPopup }) => {
    return (
        <div className={`fixed inset-0  flex items-center justify-center`}>
            <div className="bg-white z-50 dark:bg-slate-900 text-slate-900 rounded-lg p-8 shadow-lg">
                <div className="flex flex-col w-72 justify-center items-center">
                    <h2 className='font-bold text-xl '>{heading}</h2>  {/* heading*/}
                    <hr className='border border-black w-full mt-2' />
                    <h2 className='my-4'>{text}</h2>
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