"use client"
import Image from "next/image"
import { FaUserFriends } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { PiCirclesFourLight, PiClockCounterClockwiseFill } from "react-icons/pi";
import Link from "next/link"
import { BiSave } from "react-icons/bi";
import { MdEventNote, MdGroups } from "react-icons/md";
import { TfiVideoClapper } from "react-icons/tfi";
import { FaShop } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import walkpaper1 from "../../../public/wallpaper1.jpg"
import walkpaper2 from "../../../public/wallpaper2.jpg"
import walkpaper4 from "../../../public/wallpaper4.jpg"
import walkpaper7 from "../../../public/wallpaper7.jpg"
import { useState } from "react";
import { AiOutlineNotification } from "react-icons/ai";
import { IoStatsChartOutline } from "react-icons/io5";
import { GoGift } from "react-icons/go";

export const Sidebar = () => {
    const [isSeemore, setisSeemore] = useState(false)
    console.log(isSeemore)

    const activities = [
        {
            id: 1,
            name: "friends",
            icon: <FaUserFriends />
        },
        {
            id: 2,
            name: "Dashbaord",
            icon: <VscGraph />
        },
        {
            id: 3,
            name: "Memories",
            icon: <PiClockCounterClockwiseFill />
        },
        {
            id: 4,
            name: "Saved",
            icon: <BiSave/>
        },
        {
            id: 5,
            name: "Groups",
            icon: <MdGroups />
        },
        {
            id: 6,
            name: "Reals",
            icon: <TfiVideoClapper />
        },
        {
            id: 7,
            name: "Marketplace",
            icon: <FaShop />
        },
        {
            id: 8,
            name: "Ad Center",
            icon: <AiOutlineNotification />
        },
        {
            id: 9,
            name: "Ads Manager",
            icon: <IoStatsChartOutline />
        },
        {
            id: 10,
            name: "Birthdays",
            icon: <GoGift />
        },
        {
            id: 11,
            name: "Chat with AIs",
            icon: <PiCirclesFourLight />
        },
        {
            id: 12,
            name: "Event",
            icon: <MdEventNote />
        },
     
    ]

    const shortcuts = [
        {
            id: 1,
            name: "Progamer Lao",
            image: walkpaper7
        },
        {
            id: 2,
            name: "Design Lao",
            image: walkpaper4
        },
        {
            id: 3,
            name: "Motorbikes in vientiane",
            image: walkpaper2
        }
    ]
    return (
        <div className="p-4 h-full">
            <div>
                <ul className="space-y-2">
                    <li className="list-item"><Link href={"#"} className="list-link">
                        <Image src={walkpaper1} alt="profile_image" className="bg-green-600 h-10 w-10 rounded-full"/>
                        <span>Kongmeng Thor</span>
                    </Link></li>

                    {
                        isSeemore ? (
                             activities.map((item) => (
                                
                                 <li className="list-item" key={item.id}>
                                     <Link href={"#"} className="list-link">
                                        <div className="text-2xl">
                                        {item.icon}
                                        </div>
                                        <span>{ item.name}</span>
                                     </Link>
                                 </li>
                        ))
                        ) : (
                                activities.filter((item) => item.id < 8).map((item) => (
                                    <li className="list-item" key={item.id}>
                                        <Link href={"#"} className="list-link">
                                            <div className="text-2xl">
                                            {item.icon}
                                            </div>
                                            <span>{ item.name}</span>
                                       </Link>
                                    </li>
                                ))
                        )
                       
                        
                        
                    }
                    
                    
                </ul>
                <div className="flex items-center h-12 rounded-lg hover:bg-second/20 my-2 space-x-2 cursor-pointer px-2" onClick={() => { isSeemore == false ? setisSeemore(true) : setisSeemore(false) }}>
                    
                    <RiArrowDropDownLine className={`h-10 w-10 bg-second/20 rounded-full ${!isSeemore ? 'rotate-180' : null}`} />
                    <div className="cursor-pointer">
                        <b>See more</b>
                    </div>
                </div>
            </div>
            <hr className="border-1 border-second my-3" />
            <div className="group">
                <div className="w-full flex justify-between">
                    <h2 >Your shortcuts</h2>
                    <span className="text-primary hidden group-hover:block"><Link href={"#"}>Edit</Link></span>
                </div>
                <ul>
                    {
                        shortcuts.map((item) => (
                            <li className="list-item" key={item.id}><Link href={"#"} className="list-link">
                                <Image src={item.image} alt="image group" className="h-10 w-10 bg-amber-200 rounded-lg"/>
                                <span>{item.name }</span>
                            </Link></li>
                        ))
                    }

                </ul>
            </div>
            <div>
                <p className="font-thin text-sm p-2 my-2">
                    <Link href={""}>Privacy</Link> · <Link href={"#"}>Terms</Link> · <Link href={"#"}>Advertising</Link> · <Link href={"#"}>Ad Choices</Link> · <Link href={"#"}>Cookies</Link> · <span>More</span>
                </p>
            </div>
        </div>
    )
}