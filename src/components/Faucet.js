import React from 'react'

const Faucet = () => {
  return (
    <div className='bg-white2 py-[100px] flex flex-col justify-center items-center'>
        <div className='w-[40%] h-[fit-content] bg-white1 shadow-xl rounded-2xl mb-[30px]'>
            <div className='flex flex-col justify-center items-center'>
                <label className='px-[40px] pt-[40px] pb-[20px] text-green3 font-semibold text-2xl font-poppins border-b border-black1/10'>fDAI Faucet</label>
                <label className='mt-[30px] font-poppins text-sm pb-[10px] text-black1/30'>Enter amount</label>
                <div className='flex flex-row rounded-xl h-[50px]'>
                        <div className='w-[30%] py-[12px] px-[10px] bg-green3 rounded-l-xl'>
                            <label className='font-poppins text-white1'>DAI</label>
                        </div>
                        <div className='border border-green3 '>
                            <input className='bg-white1 py-[12px] px-[10px]' placeholder='0.0000000...'/>
                        </div>
                        <div className='w-[30%] py-[12px] px-[10px] bg-green3/20 rounded-r-xl'>
                            <button className='font-poppins text-green3'>MAX</button>
                        </div>
                </div>
                <button className='text-white1/60 font-poppins font-semibold text-sm w-[54%] py-[12px] px-[10px] bg-green3/80 hover:bg-green3 hover:text-white1 rounded-xl mt-[20px] mb-[50px]'>GET DAIX</button>
            </div>
        </div>
    </div>
  )
}

export default Faucet