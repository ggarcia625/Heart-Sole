import React from "react";
import Link from "next/link";
// import Heart_Sole from '../assests/HeartSole.png';
// const HeartSole = require(Heart_Sole);

const NavBar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center">
      {/* <img src={HeartSole} alt="Logo"/> */}
      <div>
        <Link href="/">Home</Link>
        <Link href="/store">MEN</Link>
        <Link href="/store">WOMEN</Link>
        <Link href="/">Clearance</Link>
        </div>
    </div>
  );
};

export default NavBar;
