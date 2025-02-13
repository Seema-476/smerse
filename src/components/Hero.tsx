"use client"
import Image from "next/image";
import Header from './common/Header'
import CustomButton from './common/CustomButton';

const Hero = () => {
  return (
    <>
    <div className='lg:bg-hero-bg sm:bg-hero-tab-bg bg-hero-mobile-bg bg-cover bg-no-repeat bg-center lg:pb-[105px] pb-[85px] relative'>
        <Header />
        <div className='xl:block hidden'>
          <Image src="/assets/images/svg/hero-left-ellipse.svg" alt='hero-left-ellipse' width={164} height={164}
            className='max-w-[164px] absolute left-0 top-7' />
      </div>
        <div className='md:block hidden'>
          <Image src="/assets/images/svg/hero-right-ellipse.svg" alt='hero-right-ellipse' width={164} height={164}
            className='max-w-[164px] absolute right-0 xl:bottom-0 -bottom-24' />
       </div>
      <div className='container max-md:px-4 max-lg:px-8'>
        <div className='flex flex-col items-center'>
            <Image src="/assets/images/webp/hero-logo.webp" alt='hero-logo' width={404} height={241} className='lg:max-w-[404px] md:max-w-[360px] sm::max-w-[300px] max-w-[256px] lg:pt-[52px] pt-[79px] md:pb-8 pb-[108px]' />
            <div className="relative">
              <h1 className="pt-8 md:text-8xl text-[40px] leading-[48px] font-black md:leading-custom-12xl text-white tracking-[6px] relative z-10 max-md:text-[40px] max-md:pt-10">
              SMERSE
            </h1>
            <span className="absolute inset-0 md:text-8xl text-[40px] leading-[48px] font-black md:leading-custom-12xl max-md:text-[40px] bg-gradient-to-b from-deep-blue via-purple to-orange bg-clip-text text-transparent tracking-[6px] top-[23.5%] -translate-x-0.5 max-md:top-[46%] max-md:left-[0.5px]">
              SMERSE
            </span>
          </div>
            <p className='md:text-4xl sm:text-2xl text-xl md:leading-custom-9xl font-semibold text-white max-w-[637px] text-center md:pt-[10px] md:pb-11 pt-7 pb-[82px] heroMainText'>FOR A WHEALTHIER LIFESTYLE. ANYTIME, ANYWHERE
          </p>
            <CustomButton title='Get Started' styleClass='md:!py-4 md:!px-7 !pt-3 !pb-[13px] !px-[22px] '/>
        </div>
      </div>
    </div>
     <div className='w-full h-10 bg-gradient-to-b from-deep-blue via-purple to-orange shadow-custom-xl'></div>
    </>
  )
}

export default Hero