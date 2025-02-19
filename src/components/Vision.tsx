import React from "react";
import Heading from "./common/Heading";
import { VISION_DATA } from "@/utils/helper";
import Description from "./common/Description";

const Vision = () => {
  return (
    <div className="bg-dark-blue lg:pb-[65px] sm:pb-[70px] pb-8 sm:pt-[99px] xl:pt-[78px] pt-5 -mt-[2px]" id="vision">
      <div id="vision" className="max-w-[1176px] container mx-auto px-8 max-sm:px-4">
        <Heading text="THE VISION" styleClass="!text-center !mx-auto !flex !items-center !justify-center" classDesign="translate-y-[-1.3px]" />
        <div className="flex flex-wrap  lg:-mx-2.5 max-sm:mx-[0.5px] pt-[130px] max-lg:pt-32 max-sm:pt-[88px] xl:gap-[24.6px] lg:gap-[16.6px] sm:gap-[22px] md:gap-[27px] lg:justify-center">
          {VISION_DATA.map((item, i) => (
            <div
              key={i}
              className={`lg:w-[31.33%] max-lg:w-[48%] max-sm:w-full ${i === 1
                  ? "max-sm:pt-[88px]"
                  : i === 2
                    ? "max-lg:pt-[60px] max-sm:pt-[84px]"
                    : ""
                }`}
            >
              <div className="relative bg-gradient-to-b cursor-pointer from-deep-blue via-purple to-orange rounded-[10px] h-full p-[1px] group">
                <div className="bg-dark-gray rounded-[10px] px-7 max-sm:px-4 pt-[90px] pb-8 h-full hover:bg-transparent">
                  <Description
                    description={item.text}
                    styleClass={`!leading-[27.2px] mx-auto !text-center max-lg:max-w-[282px] ${i === 0 ? "lg:!max-w-[300px]" : i === 1 ? "lg:max-w-[263px]" : i === 2 ? "lg:max-w-[278px]" : ""}`}
                  />
                </div>
                <div className="size-24 max-sm:size-[86px] absolute rounded-full top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gradient-to-b from-purple via-pink to-orange p-[1px]">
                  <div className="w-full h-full bg-dark-gray rounded-full flex items-center justify-center group-hover:bg-transparent">
                    <Heading text={item.title} classDesign="translate-y-[-1.3px]" styleClass="!text-4xl !leading-custom-8xl" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vision;
