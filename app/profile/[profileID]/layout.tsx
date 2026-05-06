"use client";
import Image from "next/image";
import wallpaper1 from "../../../public/wallpaper1.jpg";
import Link from "next/link";
import { BsThreeDots } from "react-icons/bs";
import { FaFacebookMessenger, FaPlus } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { ImBoxAdd } from "react-icons/im";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { acount } from "@/types/acount";
import { acounts } from "@/services/acounts";
import { MdPersonAddDisabled } from "react-icons/md";
import { useMenu } from "@/context/menuAtProfile";

export default function ProfileLayout({children}:Readonly<{children : React.ReactNode}>) {
    const [current, setCurrent] = useState("All");
    const [seeMorePeople, setSeeMorePeople] = useState(false);
    const [addFriend, setAddFriend] = useState(false)
    const [isFollow, setIsFollow] = useState(false)
    const [data, setData] = useState<acount[]>([]);
    const { currentMenu, setCurrentMenu } = useMenu()
    
    const taps = [
        {
            id: 1,
            name: "All",
            link: "/profile/123"
        },
        {
            id: 2,
            name: "About",
            link: '/profile/id/about'
        },
        {
            id: 3,
            name: "Reals",
            link: './about'
        },
        {
            id: 4,
            name: "Photos",
            link: './about'
        },
        {
            id: 5,
            name: "Friends",
            link: './about'
        }
        
    ]
    
        useEffect(() => {
            const loadData = async () => {
                try {
                    const data = await acounts();
                    setData(data);
                }
                catch (err: unknown) {
                    if (err instanceof Error) {
                        console.log(err.message);
                    }
                }
            };
    
            loadData();
        }, []);
    
        return (
            <div>
                <div className="h-auto w-full flex flex-col items-center">
                    <div className="h-[20vh] sm:h-[40vh] md:h-[60vh] w-full flex justify-center relative">
                        <div className="w-full h-full absolute">
                            <div className="h-full w-full relative blur-2xl">
                                <Image src={wallpaper1} alt="background profile" fill className="" />
                                <div className="w-full h-full bg-linear-to-t from-white to-transparent absolute"></div>
                            </div>
                        </div>
                        <div className="h-full w-full max-w-280  relative overflow-hidden rounded-b-xl ">
                            <Image src={wallpaper1} alt="background profile" fill className="object-cover" />
                        </div>
                    </div>
                    <div className="h-auto w-full max-w-260  ">
                        <div className="h-auto md:h-40 w-full md:my-10 flex-col flex md:flex-row">
                            <div className="h-auto w-full flex-col flex md:flex-row space-x-4  ">
                                <div className="absolute left-1/2 md:static md:h-full  translate-[-50%] md:translate-0">
                                   <div className="h-30 md:h-full aspect-square rounded-full relative overflow-hidden  ">
                                       <Image src={wallpaper1} alt="profile image"></Image>
                                   </div> 
                                </div>
                                
                                <div className="space-x-2  flex-col text-center md:text-left pt-15 md:pt-2">
                                    <h1 className="text-2xl font-bold">Name</h1>
                                    <Link href={"#"}>
                                        <span>16</span>K followers
                                    </Link>
                                    <span>•</span>
                                    <Link href={""}>
                                        <span>213</span> following
                                    </Link>
                                    <p>descript about profile</p>
                                    <p>address</p>
                                    <Link href={"#"}>
                                        <ul className="h-8 w-full flex justify-center md:justify-start">
                                            <li className="h-full aspect-square rounded-full relative overflow-hidden border-2 border-white">
                                                <Image src={wallpaper1} alt="follower" />
                                            </li>
                                            <li className="h-full aspect-square rounded-full relative overflow-hidden right-3 border-2 border-white">
                                                <Image src={wallpaper1} alt="follower" />
                                            </li>
                                            <li className="h-full aspect-square rounded-full relative overflow-hidden right-6 border-2 border-white">
                                                <Image src={wallpaper1} alt="follower" />
                                            </li>
                                            <li className="h-full aspect-square rounded-full relative overflow-hidden right-9 border-2 border-white">
                                                <Image src={wallpaper1} alt="follower" fill />
                                                <div className="h-full w-full bg-black absolute opacity-50 flex justify-center items-center">
                                                    <BsThreeDots className="text-white text-lg" />
                                                </div>
                                            </li>
                                        </ul>
                                    </Link>
                                </div>
                            </div>
                            <div className="h-full w-full bg-white">
                                <div className="h-auto w-full flex flex-wrap gap-2 justify-center md:justify-end my-1">
                                    <button className="h-10 px-2 flex items-center bg-second/20 hover:bg-second/30 rounded-lg space-x-2" >
                                        <FaFacebookMessenger />
                                        <span>Message</span>
                                    </button>
                                    <button className="h-10 px-2 flex items-center bg-primary text-white hover:bg-primary/90 rounded-lg space-x-2" onClick={() => isFollow ? setIsFollow(false) : setIsFollow(true)} >
                                        <ImBoxAdd />
                                        <span>{isFollow ? 'following' : 'follow' }</span>
                                    </button>
                                    <button className="h-10 px-2 flex items-center bg-second/20 hover:bg-second/30 rounded-lg space-x-2" onClick={() => addFriend ? setAddFriend(false):setAddFriend(true)}>
                                        <IoPersonAdd className={`${!addFriend ? 'block' : 'hidden'}`} /><MdPersonAddDisabled className={`${addFriend ? 'block' :'hidden'}` } />
                                        <span>{addFriend ? 'Canncel request':'Add friend' }</span>
                                    </button>
                                    <button className="h-10 w-full max-w-80 sm:w-15 justify-center  flex items-center bg-second/20 hover:bg-second/30 rounded-lg text-2xl" onClick={() => (seeMorePeople ? setSeeMorePeople(false) : setSeeMorePeople(true))}>
                                        <RiArrowDropDownLine className={`${seeMorePeople && "rotate-180"}`} />
                                    </button>
                                </div>
                            </div>
                        </div>
    
                        {seeMorePeople && (
                            <div className="h-72 w-full p-3 shadow-2xl rounded-2xl mb-4">
                                <h2 className="text-lg font-medium h-[15%]">People You May Know</h2>
                                <ul className="h-[85%] flex space-x-2 overflow-x-scroll no-scrollbar">
                                    {data.map((item) => (
                                        <li className="flex-shrink-0 h-full w-32 sm:w-36 bg-white  rounded-2xl overflow-hidden relative shadow-2xl group" key={item.item.id} >
                                            <div>
                                                <div className="w-full aspect-square sm:h-40 b relative">
                                                    <Image src={item.user.picture.large} alt="owner_image" fill></Image>
                                                    <span className="h-8 w-8 rounded-full bg-black/50 hover:bg-black/70 absolute top-1 right-1 p-1 text-2xl text-white">
                                                        <IoMdClose />
                                                    </span>
                                                </div>
                                                <div className="flex flex-col items-center">
                                                    <Link href={""}>
                                                        <h2 className="font-medium">{item.user.name.first}</h2>
                                                        <button className="w-full flex space-x-2 items-center px-3 py-1 bg-primary/10 rounded-lg text-primary hover:bg-primary/30">
                                                            <IoPersonAdd />
                                                            <span>Add friend</span>
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        <hr />
                        <div className="h-13 w-full flex items-center justify-between">
                            <ul className="h-11 flex space-x-2">
                                {/* {taps.map((tap) => (
                                    <li className={`${(tap == "About" || tap == "Friends") && "hidden md:flex"} h-full px-4 flex flex-col justify-center items-center rounded-lg hover:bg-second/20 font-medium text-second relative`} key={tap} onClick={() => setCurrent(tap)}>
                                        <Link href={"#"}>{tap}</Link>
                                        {current == tap && <span className={`w-full h-1 bg-primary absolute bottom-[-4px]`}></span>}
                                    </li>
                                ))} */}
                                {
                                    taps.map(tap => (
                                        <li className={`${(tap.name == "About" || tap.name == "Friends") && "hidden md:flex"} h-full  flex flex-col justify-center items-center rounded-lg hover:bg-second/20 font-medium text-second relative`} key={tap.id} onClick={() => setCurrentMenu(tap.name)}>
                                            <Link href={tap.link} className="px-4 h-full flex flex-col justify-center items-center">{tap.name}</Link>
                                            {currentMenu == tap.name && <span className={`w-full h-1 bg-primary absolute bottom-[-4px]`}></span>}
                                        </li>

                                    ))
                                }
                                <li className="h-full px-4 hidden md:flex justify-center items-center rounded-lg hover:bg-second/20 font-medium text-second relative">
                                    <Link href={"#"} className="flex space-x-2 items-center">
                                        <span>More</span>
                                        <RiArrowDropDownLine />
                                    </Link>
                                </li>
                            </ul>
                            <div className="h-8 w-12 bg-second/40 rounded-lg hidden md:flex justify-center items-center text-lg ">
                                <BsThreeDots />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-100 w-full bg-sky-400">

                    {children}
                </div>
            </div>
        );
}