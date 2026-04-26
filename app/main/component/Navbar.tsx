"use client"

import walkpaper1 from "../../../public/wallpaper1.jpg"
import Image from "next/image";
import {FiHome} from "react-icons/fi";
import {TfiVideoClapper} from "react-icons/tfi";
import {CiShop} from "react-icons/ci";
import {MdOutlineInsertChart} from "react-icons/md";
import {CiBellOn} from "react-icons/ci";
import {CgMenuGridR} from "react-icons/cg";
import {AiFillMessage} from "react-icons/ai";
import { GoBellFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import "./style.css"
import "../../globals.css"
const Navbar = () => {
    const [isEmpty, setisEmpty] = useState("")
    const [isFocused, setIsFocused] = useState(false);
    const shouldHideIcon = isFocused || isEmpty.length > 0;

    const [currentOn, seCurrentOn] = useState('home')

    return (
        <div className="h-auto bg-white flex justify-between items-center p-1 md:px-4 flex-wrap gap min-w-88 shadow-2xl">
            {/* logo and search */}
            <div className="flex items-center gap-3 max-w-120 sm:w-auto md:w-[30%] pl-0 md:order-1">
                <div className="w-10 h-10 ">
                    <Image src={walkpaper1} alt="logo" width={40} height={40} className="rounded-full"></Image>
                </div>
                <div className="relative inline-block">
                {/* 1. Conditionally render the icon based on state */}
                {!shouldHideIcon &&(
                    <CiSearch className="absolute left-5 top-1/2 translate-[-50%] pointer-none text-xl"/>
                )}

                <input
                    type="search"
                    placeholder={isFocused ? "" : "   Search..."}
                    onFocus={() => setIsFocused(true)}  // 2. Hide on focus
                    onBlur={() => setIsFocused(false)}   // 3. Show again on blur
                    onChange={(e)=>{setisEmpty(e.target.value)}}
                    value={isEmpty != "" ? isEmpty: ""}
                    className=" bg-second/20 h-10  rounded-full px-4 text-md max-w-60 md:w-10 md:p-0 md:placeholder:text-transparent lg:w-60 lg:px-6 lg:placeholder:text-gray-500"
                    />
                   
                </div>
            </div>

            {/* activity */}
            <div className="flex h-12  w-full md:w-[40%] order-3 sm:order-2 gap-2 ">
                <div className="menu-activity flex-col relative hover:bg-second/20" onClick={() => seCurrentOn("home")}>
                    <div >
                        <FiHome />
                    </div>
                    {currentOn == "home" && (
                        <div className="w-full h-1 bg-primary absolute bottom-[-4px]"></div>
                      )
                    }
                </div>
                <div className="menu-activity flex-col relative hover:bg-second/20" onClick={() => seCurrentOn("video")}>
                    <div >
                        <TfiVideoClapper />
                    </div>
                    {currentOn == "video" && (
                        <div className="w-full h-1 bg-primary absolute bottom-[-4px]"></div>
                      )
                    }
                </div>
                <div className="menu-activity flex-col relative hover:bg-second/20" onClick={() => seCurrentOn("shopping")}>
                    <div >
                        <CiShop />
                    </div>
                    {currentOn == "shopping" && (
                        <div className="w-full h-1 bg-primary absolute bottom-[-4px]"></div>
                      )
                    }
                </div>
                <div className="menu-activity flex-col relative hover:bg-second/20" onClick={() => seCurrentOn("graph")}>
                    <div >
                        <MdOutlineInsertChart />
                    </div>
                    {currentOn == "graph" && (
                        <div className="w-full h-1 bg-primary absolute bottom-[-4px]"></div>
                      )
                    }
                </div>
                <div className="menu-activity flex-col relative hover:bg-second/20" onClick={() => seCurrentOn("bell")}>
                    <div >
                        <CiBellOn />
                    </div>
                    {currentOn == "bell" && (
                        <div className="w-full h-1 bg-primary absolute bottom-[-4px]"></div>
                      )
                    }
                </div>
                
            
            </div>

            {/* active */}
            <div className="flex w-10 sm:w-auto md:w-[30%] justify-end gap-2 h-12  items-center md:order-3">
                <div className="h-10 w-10 bg-gray-200 hover:bg-gray-300 rounded-full justify-center items-center text-3xl hidden sm:flex ">
                    <CgMenuGridR />
                </div>
                <div className="h-10 w-10 bg-gray-200 hover:bg-gray-300 rounded-full justify-center items-center text-2xl  hidden sm:flex ">
                    <AiFillMessage />
                </div>
                <div className="h-10 w-10 bg-gray-200 hover:bg-gray-300 rounded-full justify-center items-center text-2xl  hidden sm:flex ">
                    <GoBellFill />
                </div>
                <div>
                    <Image src={walkpaper1 } alt="profile" width={40} height={40} className="rounded-full" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
