import Image from "next/image";
import React from "react";
import logo1 from "@/assets/images/logo/logo.jpeg";
import Link from "next/link";

const NavbarLogo = () => {
  return (
    <div className="lg:col-start-1 lg:col-span-2 flex justify-center items-center">
      <Link href="/home-10" className="block max-w-[120px] py-2 px-2 rounded-standard">
      <Image
      src={logo1}
      alt=""
      placeholder="blur"
      className="w-30 h-25 rounded-full" // Adjust width and height to make it smaller, and apply rounded-full to make it circular
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
