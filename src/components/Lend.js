import React from 'react'

const Lend = () => {
  return (
    <div className='bg-white2 py-[100px] flex flex-col justify-center items-center'>
        <div className='w-[50%] h-[fit-content] bg-white1 shadow-xl rounded-2xl mb-[30px]'>
            <div className='flex flex-row justify-between'>
                <div  className='flex flex-col justify-center items-center border-r border-black1/10 py-[30px] px-[30px]'>
                    <label className='font-poppins text-4xl font-semibold text-green3'>3.383%</label>
                    <label className='font-poppins text-xl text-green1'>Fixed APY</label>
                </div>
                <div className='flex flex-col justify-center items-center border-r border-black1/10 py-[30px] px-[40px]'>
                    <label className='font-poppins text-2xl font-semibold text-green3'>1.005 DAI</label>
                    <label className='font-poppins text-xl text-green1'>Total at Maturity</label>
                </div>
                <div className='flex flex-col justify-center items-center py-[30px] px-[40px]'>
                    <label className='font-poppins text-2xl font-semibold text-green3'>0.005 DAI</label>
                    <label className='font-poppins text-xl text-green1'>Interest Earned</label>
                </div>
            </div>
        </div>

        <div className='w-[65%] h-[fit-content] bg-white1 shadow-xl rounded-2xl'>
            <div className='flex flex-col px-[30px] py-[30px]'>
                <label className='p-[10px] mb-[5px] text-green3 font-poppins font-semibold text-2xl border-b border-black1/10'>Lend Order</label>
                <div className='flex flex-row justify-between px-[50px] mt-[20px]'>
                    <label className='text-xl font-poppins text-green1 pt-[12px]'>How much do you want to lend?</label>
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
                </div>

                <button className='rounded-xl text-white1/60 font-poppins font-semibold text-md mt-[30px] mx-[310px] p-[10px] bg-green3/80 hover:bg-green3 hover:text-white1'>Confirm and Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Lend