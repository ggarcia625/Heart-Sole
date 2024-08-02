"use client";
import React, { useState } from "react";
import Link from "next/link";
// import heartSole from "../assests/runningShoe.svg";
// const HeartSole = require(Heart_Sole);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 ">
      <div className="">
        <Link href="/" className="mx-4">
          HOME
        </Link>
        <Link href="/Men" className="mx-4">
          MEN
        </Link>
        <Link href="/Women" className="mx-4">
          WOMEN
        </Link>
        <Link href="/Clearance" className="mx-4">
          CLEARANCE
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)}></button>
      </div>
    </div>
  );
};

export default NavBar;
