import React from "react";
import { useState } from "react";
import Button from "./Button";

const Nav = () => {

    const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex bg-white py-4 items-center justify-between ">
        <div className="font-bold text-2xl cursor-pointer flex items-center md:mx-10 mx-7">
          <span className="text-3xl mr-1 pt-2 text-blue-600 ">
          <ion-icon name="home"></ion-icon>
          </span>
          Oracle
        </div>
        <div onClick={() => setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden" >
        <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center mr-14 md:pb-0 pb-12 absolute md:static bg-white left-0 w-full md:w-auto md:z-0  font-semibold md:pl-0 pl-9 transition-all duration-300 ease-in ${open ? 'top-[4.5rem]' : 'top-[-490px]'} `}>
          <li className="md:ml-8 text-xl md:my-0 my-7 ">
            {" "}
            <a
              className="text-gray-800 hover:text-gray-400 duration-150"
              href="/"
            >
              Buy
            </a>{" "}
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 ">
            {" "}
            <a
              className="text-gray-800 hover:text-gray-400 duration-150"
              href="/"
            >
              Rent
            </a>{" "}
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7 ">
            {" "}
            <a
              className="text-gray-800 hover:text-gray-400 duration-150"
              href="/"
            >
              Sell
            </a>
          </li>
          <Button>Login</Button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
