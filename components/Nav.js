import Link from "next/link";
import React from "react";
import { gsap } from "gsap";
import { useEffect } from "react";


const Nav = () => {
  useEffect(() => {
    gsap.fromTo(".Nav", { opacity: 0 }, { opacity: 1  }, '<');
  }, []);
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
