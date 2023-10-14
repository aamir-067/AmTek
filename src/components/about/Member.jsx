import React from 'react'

export const Member = ({ name, image, title }) => {

    return (
        <div className="flex flex-col w-10/12 max-w-sm md:w-5/12 lg:w-3/12 items-center text-start">
            <div
                className="relative flex h-96 w-full flex-col justify-end rounded-[10px] bg-red-300"
                style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <img
                    src={image}
                    alt={`the portrait of the ${name}`}
                    className="z-0 h-full w-full rounded-[10px] object-cover"
                />
                <div className="absolute bottom-0  py-4 bg-slate-900/70 w-full">
                    <h1 className="text-xl px-2 capitalize font-semibold text-slate-200">{name}</h1>
                    <h6 className="text-base px-2 capitalize text-slate-200">{title}</h6>
                </div>
            </div>
        </div>
    )
}
