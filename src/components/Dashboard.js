import React from 'react'
const Dashboard = () => {
  return (
    <div className='flex flex-col'>
           
        <label className='font-poppins text-2xl text-black1 font-medium mb-[50px]'>Connect to flow</label>

        <div className='flex flex-row justify-center space-x-6 mb-[30px]'>
            <a href='/borrow'>
                <div className='rounded-2xl bg-white1 shadow-xl pt-[40px] w-[275px] h-[150px]'>
                    <label className='font-poppins text-md text-black1'>Borrow Stablecoins</label>
                    <p className='font-poppins text-sm'>Borow any stablecoin at fixed rates against your NFTs</p>
                </div>
            </a>

            <a href= '/lend'>
                <div className='rounded-2xl bg-white1 shadow-xl pt-[40px] w-[275px] h-[150px]'>
                    <label className='font-poppins text-md text-black1'>Lend Stablecoins</label>
                    <p className='font-poppins text-sm'>Lend any stablecoin at fixed rates</p>
                </div>
            </a>
        </div>

        <div className='flex flex-row justify-center space-x-6'>
            <a href='/streams'>
                <div className='rounded-2xl bg-white1 shadow-xl pt-[40px] w-[275px] h-[150px]'>
                    <label className='font-poppins text-md text-black1'>Track Streams</label>
                    <p className='font-poppins text-sm'>View and track your ongoing streams</p>
                </div>
            </a>

            <div className='rounded-2xl bg-white1 shadow-xl pt-[40px] w-[275px] h-[150px]'>
                <label className='font-poppins text-md text-black1'>Try out flow</label>
                <p className='font-poppins text-sm'>Start on a testnet</p>
            </div>
        </div>
    </div>
  )
}

export default Dashboard