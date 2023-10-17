import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { EndPreSales, getPreSaleStatus, schedulePreSale } from '../../utils/adminInteraction';
import { setPreSaleStatue } from '../../reducers/preSaleReducer';

const PreSale = () => {
    const preSaleTime = React.useRef();
    const { preSaleStatus } = useSelector(state => state);
    const dispatch = useDispatch();
    const updatePreSaleStatus = async () => {
        const res2 = await getPreSaleStatus()
        let status;
        if (res2 === 0) {
            status = 'Not Started';
        } else if (res2 === 1) {
            status = 'In Progress';
        } else {
            status = 'Ended';
        }
        dispatch(setPreSaleStatue({ ...preSaleStatus, status }));
    }
    const handleStartPreSale = async () => {
        const res = await schedulePreSale({ time: Number(preSaleTime.current.value) });
        if (!res) return;
        // update the presale status now.
        updatePreSaleStatus();

    }

    const handleEndPreSale = async () => {
        const res = await EndPreSales();
        if (!res) return;
        // update the presale status now.
        updatePreSaleStatus();
    }

    return (
        <div className='w-10/12 my-5 mb-10'> {/* pre sale */}
            <h2 className='text-2xl font-bold text-center my-3'>Pre sale Section</h2>
            <form className='w-full flex justify-between items-center' action="" onSubmit={() => handleStartPreSale()}> {/*schedule pre sale */}
                <input
                    required
                    ref={preSaleTime}
                    className="flex h-10 mx-2 w-full border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="number"
                    placeholder="schedule pre sale time in ms"
                    id="name"
                />
                <button type='button' className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Schedule</button>
            </form>
            <div className='w-10-12 flex justify-center gap-10 my-5 items-center'>
                <button onClick={() => handleEndPreSale()} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">End PreSale</button>
            </div>
            <div className='w-10-12 flex justify-center gap-5 items-center'>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Check Pre-sale status</button>
                <h2 className='font-bold text-lg '>{preSaleStatus.status}</h2>
            </div>
        </div>
    )
}

export default PreSale