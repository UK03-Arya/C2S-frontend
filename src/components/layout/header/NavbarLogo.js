import Image from "next/image";
import React from "react";
import logo1 from "@/assets/images/logo/logo.jpeg";
import Link from "next/link";

const NavbarLogo = () => {
  return (
    <div className="lg:col-start-1 lg:col-span-2 flex justify-center items-center">
      <Link href="/home-10" className="block max-w-[120px] py-2 px-2 rounded-standard">
        <Image
          priority="false"
          src={logo1}
          alt="logo"
          className="w-full h-auto animate-zoom" // Apply the zoom animation class
        />
      </Link>
      <style jsx>{`
        @keyframes zoom {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        
        .animate-zoom {
          animation: zoom 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NavbarLogo;
