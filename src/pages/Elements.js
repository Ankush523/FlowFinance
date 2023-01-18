import React, { useState } from "react";
import logo from "../components/images/logo1.png";
import wallet from "../components/images/wallet5.png";
import dashboard from "../components/images/dashboard.png";
import lend from "../components/images/lendtoken.png";
import coins from "../components/images/coins.png";
import stream from "../components/images/stream.png";
import Streams from "../components/Streams";
import Borrow from "../components/Borrow";
import Lend from "../components/Lend";
import Dashboard from "../components/Dashboard";
import { ConnectButton } from '@rainbow-me/rainbowkit';


const Elements = () => {
  const [selection, setSelection] = useState("1");

  return (
    <div className="flex flex-row ">
      <div className="w-[18%] flex flex-col h-[100vh]">
        <div className="flex flex-col rounded-2xl mx-[20px] my-[20px] h-[100vh] shadow-xl bg-white1">
          <div className="flex flex-row space-x-4 text-center justify-center pt-[30px]">
            <img src={logo} alt="logo" className="h-[40px] w-[40px]" />
            <label className="font-poppins font-medium text-green1  text-4xl">flow</label>
          </div>
          <button>
            <div className="flex flex-row space-x-2 items-center pl-[8px] rounded-xl mx-[10px] bg-green3 py-[8px]  mt-[40px]">
              <img
                src={wallet}
                alt="wallet"
                className="h-[35px] p-[5px] bg-white1/20 rounded-md"
              />
              <div className="font-poppins text-sm font-medium text-white1">                
                <ConnectButton accountStatus="address" chainStatus="none"  showBalance={false} />
              </div>
            </div>
          </button>

          <button onClick={() => setSelection(1)}>
            <div className="flex flex-row space-x-2 items-center pl-[8px] rounded-xl mx-[10px] hover:bg-green1/10 py-[8px]  mt-[20px]">
              <img
                src={dashboard}
                alt="dashboard"
                className="h-[35px] p-[5px] bg-white1/20 rounded-md"
              />
              <p className="font-poppins text-sm font-medium text-green3">
                Dashboard
              </p>
            </div>
          </button>

          <button onClick={() => setSelection(2)}>
            <div className="flex flex-row space-x-2 items-center pl-[8px] rounded-xl mx-[10px] hover:bg-green1/10 py-[8px]  mt-[10px]">
              <img
                src={stream}
                alt="dashboard"
                className="h-[35px] p-[5px] bg-white1/20 rounded-md"
              />
              <p className="font-poppins text-sm font-medium text-green3">
                My Streams
              </p>
            </div>
          </button>

          <button onClick={() => setSelection(3)}>
            <div className="flex flex-row space-x-2 items-center pl-[8px] rounded-xl mx-[10px] hover:bg-green1/10 py-[8px]  mt-[10px]">
              <img
                src={lend}
                alt="dashboard"
                className="h-[35px] p-[5px] bg-white1/20 rounded-md"
              />
              <p className="font-poppins text-sm font-medium text-green3">
                Lend
              </p>
            </div>
          </button>

          <button onClick={() => setSelection(4)}>
            <div className="flex flex-row space-x-2 items-center pl-[8px] rounded-xl mx-[10px] hover:bg-green1/10 py-[8px]  mt-[10px]">
              <img
                src={coins}
                alt="dashboard"
                className="h-[35px] p-[5px] bg-white1/20 rounded-md"
              />
              <p className="font-poppins text-sm font-medium text-green3">
                Borrow
              </p>
            </div>
          </button>
        </div>
      </div>

      <div className="h-[100vh] w-[100vw] px-4 flex flex-col justify-center">
        
          {selection == "1" ? (
            <div>
              <Dashboard />
            </div>
          ) : selection == "2" ? (
            <div>
              <Streams />
            </div>
          ) : selection == "3" ? (
            <div>
              <Lend />
            </div>
          ) : (
            <div>
              <Borrow />
            </div>
          )}
        </div>
    </div>
  );
};

export default Elements;
