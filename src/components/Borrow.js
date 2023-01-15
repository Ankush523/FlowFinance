import React from 'react'

const Borrow = () => {
  return (
    <div className='bg-white2 py-[100px] flex flex-col justify-center items-center'>
        <div className='w-[50%] h-[fit-content] bg-white1 shadow-xl rounded-2xl mb-[30px]'>
            <div className='flex flex-row justify-between'>
                <div  className='flex flex-col justify-center items-center border-r border-black1/10 py-[30px] px-[30px]'>
                    <label className='font-poppins text-4xl font-semibold text-green3'>3.982%</label>
                    <label className='font-poppins text-xl text-green1'>Fixed APY</label>
                </div>
                <div className='flex flex-col justify-center items-center border-r border-black1/10 py-[30px] px-[40px]'>
                    <label className='font-poppins text-2xl font-semibold text-green3'>1.008 DAI</label>
                    <label className='font-poppins text-xl text-green1'>Total Due at Maturity</label>
                </div>
                <div className='flex flex-col justify-center items-center py-[30px] px-[40px]'>
                    <label className='font-poppins text-2xl font-semibold text-green3'>0.008 DAI</label>
                    <label className='font-poppins text-xl text-green1'>Interest</label>
                </div>
            </div>
        </div>
        
        <div className='w-[65%] h-[fit-content] bg-white1 shadow-xl rounded-2xl'>
            <div className='flex flex-col px-[30px] space-y-4 py-[30px]'>
                <label className='text-left bg-green1/10 w-[fit-content] p-[10px] rounded-xl text-green1 font-poppins font-semibold text-xl'>Borrow Order</label>
                <div className='flex flex-col'>
                    <label>How much do you want to borrow?</label>
                    <div>
                        <input className='' placeholder='0.0000000...'/>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <label>Specify collateral to deposit</label>
                    <div>
                        <input className='' placeholder='0.0000000...'/>
                    </div>
                </div>

                <button>Confirm and Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Borrow