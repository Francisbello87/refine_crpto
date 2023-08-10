import Link from "next/link";
import React from "react";



const Nav = () => {

  return (
    <div className=" flex Nav items-center justify-end px-10 pt-7 self-end">
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
