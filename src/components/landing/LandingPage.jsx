import React from 'react'

const LandingPage = () => {
    return (
        <div className='w-full mt-32 flex justify-center'>
            <div className='w-8/12'>
                <h2 className='text-8xl font-bold text-center text-gray-900 dark:text-gray-100 capitalize font_secondary'>Your art, Your Asset</h2>
                <p className='font_primary text-gray-900 text-center dark:text-gray-100 md:text-lg mt-14'>Join us in revolutionizing the art world as we know it. Our innovative platform is designed to transform your doodles into unique NFTs. This transformation process is not just about digitization, but it’s about giving a new dimension to your creativity and bringing a paradigm shift in how art is perceived and valued.</p>
                <div className='w-full flex justify-center items-center mt-16'>
                    <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-4 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Explore store</button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage