"use client"
import Image from "next/image";
import walkpaper1 from "../../public/wallpaper1.jpg"
import walkpaper2 from "../../public/wallpaper2.jpg"
import Link from "next/link";
import { RiLiveFill } from "react-icons/ri";
import { IoImages } from "react-icons/io5";
import { FaFileVideo } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { fetchData } from "@/services/first_fectching_api";
import { Items } from "@/types/Item";
import { acounts } from "@/services/acounts";
import { BsThreeDots } from "react-icons/bs";
import { BiCloset, BiWorld } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { acount } from "@/types/acount";
import { useEffect, useState } from "react";
import { Comment_post } from "./component/comment_post";
import { AmountPost } from "./component/amountPost";
// import { acounts } from "@/services/acounts";

const HomePage = () => {
    const [isFollow, setisFollow] = useState("Follow")
    const [datas, setDatas] = useState<acount[]>([])
    const [amountPost, setamountPost] = useState<number>(4)
    const [sizePost, setsizePost] = useState<number>(4 / 4)
    
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await acounts()
                setDatas(data)
                
            }
            catch (err: unknown) {
                if (err instanceof Error) {
                    console.log(err.message)
                }
            }
        }
        loadData()
      

        
    }, [])

    const listPost = datas.length > 0 
        ? [datas[5]?.item?.image, datas[9]?.item?.image].filter(Boolean) as string[]
        : [];
    console.log(listPost)
    
   
    
    return (
        <div className="w-full flex gap-2 flex-col py-2 sm:py-4 min-w-88 max-w-156 md:max-w-180 md:px-2">
            <div className=" w-full h-auto bg-white shadow-2xl flex justify-between relative pl-12 sm:pl-16 space-x-1 px-1 sm:px-4 p-2 sm:rounded-2xl ">
                <Link href={""} className="w-10 h-10 absolute left-1 sm:left-4">
                    <Image src={walkpaper1} alt="profile_image" className="h-10 w-10 rounded-full"/>
                </Link>
                <div className=" bg-second/20 p-2 rounded-xl w-full hover:bg-second/30">
                    <p>What on your mind today</p>

                </div>
                <div className="flex text-2xl md:text-3xl">
                    <Link href={""} className="h-10 w-10 hover:bg-second/20 justify-center items-center rounded-lg hidden sm:flex"><RiLiveFill /></Link>
                    <Link href={""} className="h-10 w-10 hover:bg-second/20 flex justify-center items-center rounded-lg "><IoImages /></Link>
                    <Link href={""} className="h-10 w-10 hover:bg-second/20 justify-center items-center rounded-lg hidden sm:flex"><FaFileVideo /></Link>
                </div>
            </div>
            {/* story section */}
            <div className="h-44 sm:h-52">
                <ul className="h-full flex space-x-2 overflow-x-auto no-scrollbar">
                    <li className="flex-shrink-0 h-full w-24 sm:w-32 bg-white hover:bg-second/30 rounded-2xl overflow-hidden relative shadow-2xl group">
                       <Link href={""} >
                            <div className="h-32 sm:h-40 bg-blue-300 group-hover:scale-105">
                                <Image src={walkpaper1} alt="owner_image" className="h-full w-full"></Image>
                            </div>
                            <div className="flex flex-col items-center">
                                <button className="h-10 w-10 bg-primary rounded-full relative bottom-4 border-4 flex justify-center items-center text-xl text-white "><FaPlus/></button>
                                <span className="absolute bottom-2 font-medium text-sm">Create story</span>
                            </div>
                        </Link> 
                    </li>
                    {
                        datas.map((item) => (
                            <li className="flex-shrink-0 h-full w-24 sm:w-32 hover:bg-second/30 rounded-2xl overflow-hidden relative shadow-2xl group" key={item.item.id}>
                                <div className="h-full w-full ">
                                    <Image src={item.item.image} alt="image-show" fill className="group-hover:scale-105"/>
                                    <div className="absolute h-9 w-9 sm:h-10 sm:w-10 rounded-full overflow-hidden border-4 border-primary left-2 top-2">
                                        <Image src={item.user.picture.medium} alt="person_profile" fill/>
                                    </div>
                                    <span className=" absolute left-2 bottom-2 text-white text-sm">{ item.user.name.first}</span>
                                </div>
                            </li>
                        ))
                        
                        
                    }
                    
                    
                </ul>
                
            </div>
            {/* content section */}
            <div>
                {/* content 1 */}
                <div className="h-auto w-full shadow-[0_0_1px_black] inset-shadow-sm rounded-lg overflow-hidden">
                    <div className="w-full bg-white p-2 flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <Link href={"#"} className="h-10 w-10 border-4 border-primary rounded-full overflow-auto">
                                <Image src={walkpaper1} alt="friend profile"/>
                            </Link>
                            <div>
                                <div>
                                    <Link href={"#"}><b>name</b></Link>
                                    <span className={`${isFollow == "Following" ? "text-second":"text-primary"} cursor-pointer`} onClick={()=>isFollow == "Follow" ? setisFollow("Following"):setisFollow("Follow")}> • { isFollow}</span>
                                </div>
                                <div className="flex space-x-1 items-center text-sm text-second">
                                    <span>year</span> <span>month</span> <span>day</span> <span>at</span> <span>time</span> • <span><BiWorld /></span>
                                </div>
                            </div>
                        </div>
                        <div className="flex text-4xl space-x-2">
                            <BsThreeDots className="p-2 rounded-full hover:bg-second/20"/>
                            <IoMdClose className="p-2 rounded-full hover:bg-second/20"/>
                        </div>
                        
                    </div>
                    <div >
                        <Comment_post comment= "helo ksjlfjaldjfskdfjlaj "/>
                    </div>
                    <div >
                        <AmountPost amountPost= {listPost} />
                       
                    </div>
                    <div className="p-2 w-full bg-sky-500">
                        action
                    </div>
                </div>
            </div>
            

           
        </div>
    );
}

export default HomePage;
