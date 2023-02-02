import React from 'react'

const Notifs = () => {
  return (
    <div className='bg-white2 py-[100px] flex flex-col justify-center items-center'>
    <div className='w-[40%] h-[fit-content] bg-white1 shadow-xl rounded-2xl mb-[30px]'>
        <div className='flex flex-col justify-center items-center'>
          <div className='flex flex-row justify-between border-b border-black1/10'>
            <label className='mr-[250px] pt-[40px] pb-[20px] text-green3 font-bold text-2xl font-poppins '>Notifications</label>
            <button className='text-white1/60 font-poppins font-semibold text-sm px-[20px]  mt-[35px] mb-[20px] bg-green3/80 hover:bg-green3 hover:text-white1 rounded-xl '>Turn On</button>
          </div>
          <label className='my-[30px]'>-</label>
        </div>
      </div>
    </div>
  )
}

export default Notifs