import Image from "next/image";
import React from "react";
import logo1 from "@/assets/images/logo/logo.jpeg";
import Link from "next/link";

const NavbarLogo = () => {
  return (
    <div className="lg:col-start-1 lg:col-span-2">
      <Link href="/home-10" className="block w-[100px] py-2 px-15px  rounded-standard">
        <Image priority="false" src={logo1} alt="logo" className="w-full" />
      </Link>
    </div>
  );
};

export default NavbarLogo;
