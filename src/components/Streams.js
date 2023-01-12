import React from 'react'

const Streams = () => {
  return (
    <div className='bg-white2'>
        <div className='w-[80%] h-[fit-content] bg-white1 shadow-xl rounded-xl'>
            <div className='flex flex-col'>
                <label>My Streams</label>
                <div className='flex flex-row justify-between'>
                    <label>Pool</label>
                    <label>Start Date</label>
                    <label>Balances</label>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Streams