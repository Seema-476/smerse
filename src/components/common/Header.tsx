"use client"
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, } from "react";
import { HEADER_LIST } from "../../utils/helper";
import CustomButton from "./CustomButton";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const handleClick=()=>{
        setOpen(!open)
    }

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > .1);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (open && window.innerWidth < 1024) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);
    return (
        <div className={`bg-light-black md:h-[100px] sm:h-16 h-[50px] flex items-center w-full transition-all duration-500 ${isScrolled ? "fixed top-0 left-0 w-full shadow-lg !bg-black !z-[100]" : "relative"
            }`}>
                <div className="container max-w-[1176px] flex justify-between w-full mx-auto items-center relative max-sm:px-4 px-8">
                    <button onClick={() => setOpen(!open)} className={`hidden md:w-[39px] md:h-8 w-3.5 h-[11.5px] justify-between items-center max-xl:absolute max-xl:right-8 max-md:right-8 max-sm:right-4 relative z-[70] max-xl:flex flex-col overflow-hidden ${open ?"md:pt-3 pt-[5px]":"pt-0"}`}>
                    <span className={`w-full transition-all duration-300 md:min-h-[5px] h-[2px] rounded-sm bg-white relative after:w-full after:h-full after:absolute after:top-0 after:left-0 ${open ? "rotate-45 !-mb-1 after:rotate-90 after:!rounded-sm after:bg-white !bg-white" : ""}`}></span>
                        <span className={`w-full transition-all duration-300 md:min-h-[5px] h-[2px] rounded-sm bg-white ${open ? "hidden" : ""}`}></span>
                        <span className={`w-full transition-all duration-300 md:min-h-[5px] h-[2px] rounded-sm bg-white after:!bg-white ${open ? "-translate-x-10 !bg-white" : ""}`}></span>
                    </button>
                <Link href="/">
                        <Image className="lg:w-[68px] md:w-[76px] w-10 h-auto " src="/assets/images/webp/header-logo.webp" width={68} height={68} alt="logo" />
                    </Link>
                    <div className="md:block xl:hidden hidden">
                    <div className="flex flex-col mr-20">
                            <CustomButton title='Mint Now' />
                        </div>
                      </div>
                        <div className={`flex items-center max-xl:px-4 xl:gap-[63px] gap-7 relative w-full max-xl:bg-black mx-auto !text-black xl:max-h-max max-xl:fixed max-xl:top-0 max-xl:h-full max-xl:w-full max-xl:flex-col max-xl:bg-hero-pattern max-xl:duration-300 max-xl:justify-center justify-end max-xl:items-center z-[60] ${open ? "max-xl:left-0" : "max-xl:left-full"}`}>
                    <div className="flex items-center gap-5 max-xl:flex-col">
                                {HEADER_LIST.map((item, index) => (
                                    <Link onClick={() => setOpen(!open)} key={index} href={item.link} className="relative max-sm:text-sm text-base font-semibold leading-custom-xl text-white transition-all duration-300 ease-linear group tracking-[0.5px]"> {item.title}
                                        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all rounded-xl duration-300 ease-linear group-hover:w-full"></span>
                                    </Link>
                                ))}
                        </div>
                        <div className="xl:block hidden">
                        <div className="flex w-full">
                                <CustomButton title='Mint Now' />
                            </div>
                        </div>
                            <div className="block sm:hidden">
                        <div className="flex w-full">
                                    <CustomButton title='Mint Now' CustomOnClick={()=>handleClick()}/>
                                </div>
                            </div>
                        </div>
                      </div>
                  </div>
    )
}

export default Header