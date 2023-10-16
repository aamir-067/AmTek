import React from 'react'
import { Featured } from '../index'
import video from '../../pics/featuredVideo.mp4';
import { buyNft } from '../../utils/buyNft';
import PopUp from './PopUp';
import { getTotalSupply } from '../../utils/getSupply';
import { useDispatch, useSelector } from 'react-redux';
import { setSupply } from '../../reducers/supplyReducer';
import SpecialPopUp from './SpecialPopUp';

const Shop = () => {
    const [isDone, setIsDone] = React.useState(false);  // for mint token popup
    const [specialPopup, setSpecialPopup] = React.useState(true);  // for special mini enable confirmation popup
    const dispatch = useDispatch();
    const { tokenSupply, web3Api } = useSelector(state => state);
    console.log(tokenSupply, web3Api.signer);

    // working.
    const buyAndGetToken = async () => {
        const res = await buyNft()
        // get the total supply it will be your current token id.
        if (!res) return;
        const currentToken = await getTotalSupply();
        await dispatch(setSupply({ ...tokenSupply, currentToken }))
        setIsDone(true);

    };
    return (
        <div className='w-full mt-10'>
            <div className='w-full flex flex-col justify-between items-center'>
                <div className='w-11/12 md:w-10/12 max-w-3xl mx-4'>
                    <video src={video} className='' loop muted controls />
                </div>
                <div className='w-6/12 mx-4 flex flex-col justify-center items-center'>
                    <h2 className='text-4xl mt-14 font-bold text-center'>Mint a Unique Doodle NFT</h2>
                    <p className='text-center my-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet odit recusandae voluptatum iste est fugiat?</p>
                    {tokenSupply.maxSupply ? <div className='flex flex-col md:flex-row flex-grow justify-evenly items-center w-full'>
                        <h2 className='text-lg lg:text-2xl font-bold text-slate-900 dark:text-slate-100'>Tokens Minted : {tokenSupply.totalSupply}</h2>
                        <h2 className='text-lg lg:text-2xl font-bold text-slate-900 dark:text-slate-100'>Max Supply : {tokenSupply.maxSupply}</h2>
                    </div> : <></>}
                    <button onClick={() => buyAndGetToken()} className='text-white xx my-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-10 py-4 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Mint Now</button>
                    <div className='w-full flex flex-col md:flex-row flex-wrap justify-evenly items-center'>
                        {tokenSupply.currentToken !== 0 && <button onClick={() => setIsDone(prev => !prev)} className=' text-blue-500 text-sm cursor-pointer hover:text-blue-700'>see my mint details</button>}
                        {isDone && <PopUp setIsDone={setIsDone} />}
                        {web3Api.signer && <button onClick={() => setSpecialPopup(prev => !prev)} className=' text-blue-500 text-sm cursor-pointer hover:text-blue-700'>I am in special minting</button>}
                        {specialPopup && <SpecialPopUp text={'loremipsum doller'} heading={'lorem iopus'} setSpecialPopup={setSpecialPopup} />}
                    </div>
                </div>
            </div>

            {/* featu red page */}
            <Featured />
        </div>
    )
}

export default Shop