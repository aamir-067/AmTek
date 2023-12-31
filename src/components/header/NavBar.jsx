import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { initWeb3 } from '../../utils/initializeWeb3Api';
import { reInitWeb3 } from '../../reducers/web3ApiReducer';
import { getMaxSupply, getTotalSupply } from '../../utils/getSupply';
import { setSupply } from '../../reducers/supplyReducer';
import { ethers } from 'ethers';

const NavBar = () => {
    const [menuToggled, setMenuToggled] = React.useState(false);
    const dispatch = useDispatch();
    const { web3Api } = useSelector(state => state);


    // to check for admin
    const [isAdmin, setIsAdmin] = React.useState(false);
    React.useEffect(() => {
        '0x575cA73E642983fF8818F0cb0Fa692A788Bc45A4' ? setIsAdmin(true) : setIsAdmin(false);
    }, [])

    const handleWalletConnect = async () => {
        if (web3Api?.signer) {  // means disconnect the wallet
            dispatch(reInitWeb3({ signer: null, contract: null, provider: null }));
        } else {
            await initWeb3();

            // get the supply.
            const maxSupply = await getMaxSupply();
            const totalSupply = await getTotalSupply();
            await dispatch(setSupply({ totalSupply, maxSupply, currentToken: 0 }))
        }
    }

    return (
        <div id='gd' className='w-full'>
            <nav className=" border-gray-200 dark:bg-gray-900 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <NavLink to={""} className="flex items-center">
                        <img src="https://bafybeigj25ax2rek4dygzjd4aw6vvf4vaklfu2jtrf4hw7dmcpy5jeaeta.ipfs.dweb.link/" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl hidden md:inline font_secondary tracking-wider text-gray-900 dark:text-gray-100 font-semibold whitespace-nowrap">AmTek</span>
                    </NavLink>

                    <div className="flex items-center gap-x-4 md:order-2">
                        <p className='font-bold hidden lg:block text-sm'>{web3Api.signer && `${[...web3Api.signer.address].slice(0, 7).join('')}....${[...web3Api.signer.address].slice(37, 42).join('')}`}</p>
                        <button onClick={handleWalletConnect} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{web3Api?.signer?.address ? 'Log out' : "wallet connect"}</button>

                        {/* onClick={() => { setMenuToggled(!menuToggled) }} */}
                        <button onClick={() => { setMenuToggled(!menuToggled) }} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>

                    {/* toggeled menu */}
                    <div id={menuToggled ? "gd3" : ""} className={`bg-white dark:bg-slate-900 dark:text-slate-100 text-slate-900 items-center ${menuToggled ? "" : "hidden"} absolute md:relative top-16  md:top-0 left-0 justify-between w-full md:flex md:w-auto md:order-1`}>
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink onClick={() => { setMenuToggled(!menuToggled) }} to="" className={({ isActive }) => `block py-2 pl-3 ${isActive ? "text-blue-700" : ""} pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => { setMenuToggled(!menuToggled) }} to="shop" className={({ isActive }) => `block py-2 pl-3 ${isActive ? "text-blue-700" : ""} pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Shop</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => { setMenuToggled(!menuToggled) }} to='contact' className={({ isActive }) => `block py-2 pl-3 ${isActive ? "text-blue-700" : ""} pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>Contact Us</NavLink>
                            </li>
                            <li>
                                <NavLink onClick={() => { setMenuToggled(!menuToggled) }} to="about" className={({ isActive }) => `block py-2 pl-3 ${isActive ? "text-blue-700" : ""} pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}>About Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar