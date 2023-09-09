import Link from "next/link";
import React from "react";
import { useRef } from "react";



const Nav = () => {
  const nav = useRef(null)

  return (
    <div ref={nav} className=" flex Nav items-center justify-end px-10 pt-7 self-end">
      <Link href={""}>
        <img className=" mr-6" src="searchnormal1.png" alt="" />
      </Link>
      <Link href={""}>
        <img src="hambergermenu.png" alt="" />
      </Link>
    </div>
  );
};

export default Nav;
