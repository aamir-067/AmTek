import React from 'react'

export const Member = () => {
    return (
        <div className="flex flex-col items-center text-start">
            <div
                className="relative flex h-96 w-full flex-col justify-end rounded-[10px] bg-red-300"
                style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <img
                    src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt=""
                    className="z-0 h-full w-full rounded-[10px] object-cover"
                />
                <div className="absolute bottom-0 py-4 bg-slate-200/60 w-full">
                    <h1 className="text-xl px-2 font-semibold text-gray-900">John Doe</h1>
                    <h6 className="text-base px-2 text-gray-900">Frontend Developer</h6>
                </div>
            </div>
        </div>
    )
}
