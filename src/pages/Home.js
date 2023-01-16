import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='flex flex-row px-[100px]'>
        <div className='flex flex-col text-left px-[50px] w-[80%] pt-[180px]'>
          <label className='text-8xl font-bold text-black1 font-poppins pb-[30px]'>Stream loans every second.</label>
          <p className='text-2xl font-poppins text-black1 pb-[30px]'>Flow finance is a real-time lending and borrowing platform that allows you to put down an NFT as collateral and borrow stablecoins against it with token streaming technology. </p>
          <a href='/elements'>
            <button className="bg-green1 rounded-xl text-white1 font-poppins font-semibold px-[20px] w-[fit-content] h-[50px] hover:bg-green3">
              Launch App
            </button>
          </a>
        </div>
        <div className=''>
          <img src="https://static.vecteezy.com/system/resources/previews/011/064/655/non_2x/cryptocurrency-3d-illustration-free-png.png" alt="pic1" className='h-[700px] w-[900px]'/>
        </div>
      </div>
    </div>
  )
}

export default Home