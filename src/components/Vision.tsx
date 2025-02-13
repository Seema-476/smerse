// import React from 'react'
// import {VISION_DATA} from '../utils/helper'
// import Heading from './common/Heading'

// const Vision = () => {
   

//     return (
//         <div className='bg-dark-blue -mt-0.5 py-20'>
//             <div className='container max-lg:px-8 max-md:px-4'>
//                 <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 max-sm:flex-wrap max-sm:flex-col'>
//                     {VISION_DATA.map(item => (
//                         <div key={item.id} className='w-full md:max-w-[367px] max-w-[343px] lg:min-h-[365px] min-h-[413px] border flex flex-col items-center rounded-[14px] bg-dark-gray duration-500 group bg-gradient-to-t hover:!to-deep-blue hover:!via-purple hover:!from-orange'>
//                             <div className='bg-gradient-to-b from-deep-blue via-purple to-orange rounded-full size-24 -mt-14 flex items-center justify-center'>
//                                 <div className='rounded-full flex items-center justify-center bg-deep-gray group-hover:bg-gradient-to-t group-hover:!to-deep-blue group-hover:!via-purple group-hover:!from-orange'>
//                                   <Heading text="01" styleClass='font-extrabold text-4xl leading-custom-8xl text-white p-[26px_27px_25px_25px] z-50 bg-gradient-to-t to-deep-blue via-purple from-orange'/>
//                                     {/* <p className='font-extrabold text-4xl leading-custom-8xl text-white p-[26px_27px_25px_25px]'>{item.title}</p> */}
//                                 </div>
//                             </div>
//                             <p className='leading-custom-3xl text-white max-w-[280px] text-center pt-[42px]'>
//                                 {item.text}
//                             </p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Vision


import React from "react";
import Heading from "./common/Heading";
import { VISION_DATA } from "@/utils/helper";
import Description from "./common/Description";

const Vision = () => {
  return (
    <div className="bg-dark-blue pb-[65px]">
      <div id="vision" className="max-w-[1176px] container mx-auto px-8 max-sm:px-4">
        <Heading text="THE VISION" styleClass="!text-center" />
        <div className="flex flex-wrap -mx-3 pt-[138px] max-lg:pt-32 max-sm:pt-[88px] xl:gap-[24.6px] lg:gap-[16.6px] sm:gap-[23px] lg:justify-center">
          {VISION_DATA.map((item, i) => (
            <div
              key={i}
              className={`md:w-[31.33%] w-[48%] p x-3 max-lg:px- 4 max-lg:w-1/2 max-sm:w-full ${
                i === 1
                  ? "max-sm:pt-[88px]"
                  : i === 2
                  ? "max-lg:pt-[84px] max-sm:pt-[88px]"
                  : ""
              }`}
            >
              <div className="relative bg-gradient-to-b cursor-pointer from-deep-blue via-purple to-orange rounded-[10px] h-full p-[1px] group">
                <div className="bg-dark-gray rounded-[10px] px-7 max-sm:px-4 pt-[90px] pb-8 h-full hover:bg-transparent">
                  <Description
                    description={item.text}
                    styleClass="leading-[27.2px] text-center"
                  />
                </div>
                <div className="size-24 max-sm:size-[86px] absolute rounded-full top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-gradient-to-b from-purple via-pink to-orange p-[1px]">
                  <div className="w-full h-full bg-dark-gray rounded-full flex items-center justify-center group-hover:bg-transparent">
                    <Heading text={item.title} />
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
