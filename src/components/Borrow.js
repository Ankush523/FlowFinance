import React from 'react'

const Borrow = () => {
  return (
    <div className='bg-white2 py-[100px] flex flex-row justify-center items-center'>
        <div className='w-[45%] h-[fit-content] bg-white1 shadow-xl rounded-2xl'>
            <div className='flex flex-col px-[30px] space-y-4 py-[30px]'>
                <label className='text-left bg-green1/10 w-[fit-content] p-[10px] rounded-xl text-green1 font-poppins font-semibold text-xl'>Borrow Order</label>
                <div className='flex flex-row justify-between'>
                    <label>Fixed APY</label>
                    <label>3.982%</label>
                </div>

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