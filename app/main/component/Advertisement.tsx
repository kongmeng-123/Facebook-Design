import Image from "next/image";
import Link from "next/link";
import walkpaper1 from "../../../public/wallpaper1.jpg"
import walkpaper2 from "../../../public/wallpaper2.jpg"
import walkpaper4 from "../../../public/wallpaper4.jpg"
import walkpaper7 from "../../../public/wallpaper7.jpg"
import metaAI from "../../../public/metaAI logo.webp"
import { GoGift } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { IoMdClose, IoMdSearch } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
interface sponsored_info {
    id: number,
    descript: string,
    website: string,
    image: string
}

export const Advertisement = () => {
    const sponsored_info = [
        {
            id: 1,
            descript: "Get 2$ bonus from binanc",
            website: "binance.com",
            image: walkpaper2
        },
        {
            id: 2,
            descript: "Get 200$ bonus from youtube",
            website: "youtube.com",
            image: walkpaper1
        },
    ]

    const contacts = [
        {
            id: 1,
            name: "kongmeng",
            active: true,
            image: walkpaper1
        },
        {
            id: 2,
            name: "maiv nyuam luaj",
            active: false,
            image: walkpaper2
        },
        {
            id: 3,
            name: "Nom txaim vaj",
            active: true,
            image: walkpaper4
        },
        {
            id: 4,
            name: "P'pajyeeb vaj",
            active: true,
            image: walkpaper7
        },
        {
            id: 5,
            name: "Yauv nrog koj nyoh mus ib sim",
            active: true,
            image: walkpaper1
        },
        {
            id: 6,
            name: "tubkawmntawv thoj",
            active: false,
            image: walkpaper2
        },
        {
            id: 7,
            name: "Tavanh BLP",
            active: true,
            image: walkpaper7
        },
        {
            id: 8,
            name: "Xavkomyogtuskoj Hlub",
            active: false,
            image: walkpaper4
        },
    ]

    const groups_chat = [
        {
            id: 1,
            persons: [
                {
                    name: contacts[0].name,
                    image: contacts[0].image
                },
                {
                    name: contacts[1].name,
                    image: contacts[1].image
                },
            ]
        },
        {
            id: 2,
            persons: [
                {
                    name: contacts[0].name,
                    image: contacts[0].image
                },
                {
                    name: contacts[1].name,
                    image: contacts[1].image
                },
            ]
        },
        {
            id: 3,
            persons: [
                {
                    name: contacts[3].name,
                    image: contacts[3].image
                },
                {
                    name: contacts[4].name,
                    image: contacts[4].image
                },
            ]
        },
        
    ]

    return (
        <div className="p-2">
            <div>
                <b className="p-4 text-second">Sponsored</b>
                <ul>
                    {
                        sponsored_info.map((item) => (
                    <li className="list-item h-auto relative group" key={item.id}>
                            <Link href={"#"} className="list-link h-auto p-3 m-2">
                                <div className="w-1/2 h-20 lg:h-40 ">
                                        <Image src = {item.image} alt="Sponsored image" className="h-full w-full"/>
                                </div>
                                {/* discript */}
                                <div className="w-1/2 h-40 flex flex-col justify-center">
                                        <p className="text-md font-bold lg:text-xl">{ item.descript}</p>
                                        { item.website}
                                </div>
                                </Link>
                                <div className=" space-x-4 absolute top-1 right-1 hidden group-hover:flex">
                                    <BsThreeDots className="h-8 w-8 rounded-full bg-white p-1 hover:bg-second/20 "/>
                                    <IoMdClose className="h-8 w-8 rounded-full bg-white p-1 hover:bg-second/20"/>
                                </div>
                        </li>
                        )
                    )}
                    
                    
                </ul>
            </div>
            <hr className="border-second" />
            <div>
                <b className="p-4 text-second">Birthday</b>
                <div className="list-item">
                    <Link href={"#"} className="flex items-center space-x-4 p-3 my-1">
                        <GoGift className="text-4xl"/>
                        <p><span className="font-bold">Nkauj hmoob yaj sab</span> and  <span className="font-bold">3 other</span> have birthday to day</p>
                    </Link>
                </div>
            </div>
            <hr className="border-second" />
            <div className="mx-4">
                <div className="flex justify-between my-2">
                    <b className="text-second">Contacts</b>
                    <div className="flex space-x-2">
                        <IoMdSearch className="h-8 w-8 rounded-full bg-white p-1 hover:bg-second/20"/>
                        <BsThreeDots className="h-8 w-8 rounded-full bg-white p-1 hover:bg-second/20 "/>
                    </div>
                </div>
                <ul>
                    <li className="list-item">
                        <Link href={"#"} className="list-link">
                            <Image src={metaAI} alt="metaAI logo" className="h-10 w-10 rounded-full" />
                            <h2>Meta AI</h2>
                        </Link>
                    </li>
                    {
                        contacts.map((person) => (
                            <li className="list-item relative" key={person.id}>
                                <Link href={"#"} className="list-link">
                                    <Image src={person.image} alt="metaAI logo" className="h-10 w-10 rounded-full" />
                                    <h2>{ person.name}</h2>
                                </Link>
                                {
                                    person.active && (
                                        <div className="active h-3 w-3 bg-green-500 rounded-full border-2 border-white absolute bottom-1 left-10"></div>

                                    )
                                }
                            </li>
                        ))
                    }
                    
                </ul>
            </div>
            <hr className="border-second" />
            <div className="mx-4">
                <div className="flex justify-between my-2">
                    <b className="text-second">Group Chats</b>
                    
                </div>
                <ul>
                    <li className="list-item">
                        <Link href={"#"} className="list-link">
                            <Image src={metaAI} alt="metaAI logo" className="h-10 w-10 rounded-full" />
                            <h2>Meta AI</h2>
                        </Link>
                    </li>
                    {
                        groups_chat.map((person) => (
                            <li className="list-item relative" key={person.id}>
                                <Link href={"#"} className="list-link">
                                    <div className="h-10 w-10 relative">
                                       <Image src={person.persons[0].image} alt="metaAI logo" className="h-7 w-7 rounded-full absolute right-0 top-0" />
                                       <Image src={person.persons[1].image} alt="metaAI logo" className="h-7 w-7 rounded-full absolute left-0 bottom-0" />

                                    </div>
                                    <h2>{person.persons[0].name}, { person.persons[1].name}</h2>
                                </Link>
                                
                            </li>
                        ))
                    }
                    <li className="list-item">
                        <Link href={"#"} className="list-link">
                            <FaPlus className="h-10 w-10 p-2"/>
                            <p>Create group chat</p>
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
};
