import React from 'react'
import Countdown from 'react-countdown';
const PreSale = ({ time }) => {
    const renderer = ({ hours, minutes, seconds, days, completed }) => {
        if (completed) {
            return <span className='text-3xl font-bold font-serifs capitalize'>Pre sale started !!</span>
        }
        return <div className='flex w-full justify-around items-center'>
            <h2 className='text-3xl font-bold font-serifs capitalize'>Pre-sale starts in</h2>
            <h2 className='text-3xl font-bold font-serifs'>{days}d {hours}h {minutes}m {seconds}s</h2>
        </div>
    }
    return (
        <div className='w-full flex justify-center items-center my-10'>
            <div className='w-6/12 text-center'>
                <Countdown
                    date={Date.now() + time}
                    renderer={renderer}
                />
            </div>
        </div>
    )
}

export default PreSale