import Image from "next/image";
import React from "react";
import ButtonPrimary from "../buttons/ButtonPrimary";
import HreoName from "../section-names/HreoName";
import PopupVideo from "../popup/PopupVideo";
import useIsTrue from "@/hooks/useIsTrue";

const HeroSlide3 = ({ slide, idx }) => {
  const isHome9 = useIsTrue("/home-9");
  const isHome9Dark = useIsTrue("/home-9-dark");
  const { tag, title, image } = slide;
  return (
    <div className="container 2xl:container-secondary-md relative overflow-hidden">
      <div >
        {/* banner Left */}
     
        {/* banner right */}
        <div
          data-aos="fade-up"
          className="md:col-start-1 md:col-span-8 lg:col-start-8 lg:col-span-5"
        >
          <div className="relative">
            <Image className="w-full" src={image} alt="" placeholder="blur" />
            {(isHome9 || isHome9Dark) && idx == 0 ? (
              <div className="absolute top-0 bottom-0 right-0 left-0 flex items-center justify-center">
                <PopupVideo />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide3;
