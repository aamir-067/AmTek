import React from 'react'
import { Member } from './Member'

const OurTeam = () => {
    return (
        <div className='w-full mt-20'>
            <div className="mx-auto max-w-7xl px-2 md:px-0">
                <div className="my-4">
                    <h1 className="text-5xl font-bold text-center">People who made it successful</h1>
                    <p className="my-6 mb-20 text-gray-500 px-10">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, aspernatur vero voluptatem quas ipsa odit placeat tempore laboriosam nostrum, maxime rerum nemo corrupti. Temporibus eius tempora animi. Ea, quo quam.
                    </p>
                </div>
                <div className="flex-col flex lg:flex-row justify-evenly gap-y-20 gap-x-10 items-center flex-wrap ">

                    <Member />
                    <Member />
                    <Member />
                </div>
            </div>
        </div>
    )
}

export default OurTeam