import React from 'react'
import { Featured } from '../index'
import video from '../../pics/featuredVideo.mp4';
import { buyNft } from '../../utils/buyNft';

const Shop = () => {
    return (
        <div className='w-full mt-10'>
            <div className='w-full flex flex-col justify-between items-center'>
                <div className='w-11/12 md:w-10/12 max-w-3xl mx-4'>
                    <video src={video} className='' autoPlay loop muted controls />
                </div>
                <div className='w-6/12 mx-4 flex flex-col justify-center items-center'>
                    <h2 className='text-4xl mt-14 font-bold text-center'>Mint a Unique Doodle NFT</h2>
                    <p className='text-center my-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet odit recusandae voluptatum iste est fugiat?</p>
                    <button onClick={() => { buyNft() }} className='text-white xx my-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-4 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Mint Now</button>
                </div>
            </div>

            {/* featu red page */}
            <Featured />
        </div>
    )
}

export default Shop