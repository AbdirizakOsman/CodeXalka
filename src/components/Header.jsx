import React from 'react';
import { useState } from 'react';
function Header() {

  return (
    <div >
      <div className="flex justify-between items-center py-5 px-4 text-white bg-yellow-200">
        <h1 className="font-bold text-4xl">
          <span style={{ color: 'black' }}>Code Xalka</span>
        </h1>
        <i id="openBtn" className="fa-solid sm:hidden fa-bars text-4xl absolute right-2"></i>
        <i id="closeBtn" className="fa-solid hidden fa-xmark text-4xl absolute right-2"></i>
        <ul className="hidden sm:flex gap-16 text-3xl text-black">
          <li className="bg-cyan-500 hover:bg-cyan-600">Home</li>
          <li>Pricing</li>
          <li>About Us</li>
        </ul>

      
      </div>
      <ul id="link" className="hidden flex-col gap-7 bg-orange-600 pb-3 pl-5 text-3xl text-white">
        <li>Home</li>
        <li>Pricing</li>
        <li>About Us</li>
        <li>Login</li>
        <button className="bg-white text-orange-300 border-2 p-2 text-3xl">Login</button>
      </ul>
    </div>
  );
}

export default Header;
