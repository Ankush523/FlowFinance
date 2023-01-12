import React from 'react'

const Streams = () => {
  return (
    <div className='bg-white2 py-[100px] flex flex-row justify-center items-center'>
        <div className='w-[60%] h-[fit-content] bg-white1 shadow-2xl rounded-2xl '>
            <div className='flex flex-col px-[20px] space-y-4 py-[20px]'>
                <label className='text-left bg-green1/10 w-[fit-content] p-[10px] rounded-xl text-green1 font-poppins font-semibold text-xl'>My Streams</label>
                <div className='flex flex-row justify-between px-[10px] font-poppins text-black1/70'>
                    <label>Pool</label>
                    <label>Start Date</label>
                    <label>Balances</label>
                </div>
                <div className='flex flex-col space-y-4 '>
                    <div className='w-full p-4 text-transparent bg-white2 rounded-2xl animate-pulse'>
                        -
                    </div>
                    <div className='w-full p-4 text-transparent bg-white2 rounded-2xl animate-pulse'>
                        -
                    </div>
                    <div className='w-full p-4 text-transparent bg-white2 rounded-2xl animate-pulse'>
                        -
                    </div>
                </div>
                <p className='text-left px-[10px] font-poppins text-black1/70'>You currently don't have any streams</p>
            </div>
        </div>
    </div>
  )
}

export default Streams