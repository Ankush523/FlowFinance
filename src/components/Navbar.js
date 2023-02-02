import React from "react";
import logo from "../images/logo1.png";
import Github from "../images/github1.png";
const Navbar = () => {
  return (
    <div className="flex flex-row justify-between w-[100vw] h-[fit-content] px-[100px] py-[50px]">
      <div className="flex flex-row space-x-2">
        <img src={logo} alt="logo" className="h-[40px] w-[40px]" />
        <label className="font-poppins font-medium text-green1  text-4xl">flow</label>
      </div>
      <div className="flex flex-row gap-3">
        <a href="https://github.com/Ankush523/FlowFinance">
          <div className="flex flex-row space-x-1 items-center border border-green1 px-5 py-1 rounded-xl hover:bg-green1/10">
            <img
              src={Github}
              alt="github"
              className="h-[35px] w-[35px]"
            />
            <p className="font-poppins font-medium text-green1">Code</p>
          </div>
        </a>
        <button className="bg-green1 rounded-xl text-white1 font-poppins font-semibold px-[20px] hover:bg-green3">
          <a href="/elements">Launch App</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;