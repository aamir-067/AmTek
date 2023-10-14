import React from 'react'

const FeaturedCard = ({ item }) => {
    return (
        <div className="relative w-2/12 rounded-md">
            <img
                src={item.image}
                alt="doodle nft"
                className="z-0 h-full w-full rounded-md object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">{item.name}</h1>
                <p className="mt-2 text-sm text-gray-300">
                    {item.title} Lorem ipsum dolor sit amet.
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                    View Profile &rarr;
                </button>
            </div>
        </div>
    )
}

export default FeaturedCard