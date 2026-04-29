"use client"

import { Spinner } from "@/components/ui/spinner";
import { postContent } from "@/services/postContent";
import { postType } from "@/types/postContent";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";
import { BiLike, BiMessage } from "react-icons/bi";
import { TbShare3 } from "react-icons/tb";

export default function Post({ params }: { params: Promise< { id: number }> }) {
    const getParams = use(params)
    console.log(getParams.id)
    const [post, setPost] = useState<postType[]>([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await postContent()
                setPost(data)
                
            } catch(err:unknown) {
                if (err instanceof Error) {
                    console.log(err.message)
                }
            }finally {
                setLoading(false); // โหลดเสร็จแล้ว (ไม่ว่าจะสำเร็จหรือไม่)
            }
        }
        loadData()
    }, [])
    
    const targetPost = post[getParams.id]
    return (
        <div className="max-w-172 w-full h-[100vh] relative left-1/2 translate-x-[-50%]">
            <ul className="h-auto w-full space-y-2">
                {
                    targetPost?.src ? (

                        targetPost.src.map(src => (
                            <li className="aspect-square w-full flex flex-col items-center border" key={src.id}>
                                <div className="aspect-square w-full bg-white relative border-b">
                                    <Image src={src.src} alt="image" fill className="object-contain"/>
                                </div>
                                
                                <div className="flex space-x-3 items-center h-10 z-10 w-full bg-second/20">
                                    <div className="flex space-x-1">
                                        <BiLike className="text-2xl hover:text-3xl duration-150"/>
                                        {/* <BiLike className={`text-2xl ${content.isLike ? "text-primary" : "text-black"} hover:text-3xl duration-150`} onClick={() => handleLike(content.id)} /> */}
                                        <span>0</span>
                                    </div>
                                    <div className="flex space-x-1">
                                        <BiMessage className="text-2xl hover:text-3xl duration-150" />
                                        <span>0</span>
                                    </div>
                                    <div className="flex space-x-1">
                                        <TbShare3 className="text-2xl hover:text-3xl duration-150" />
                                        <span>0</span>
                                    </div>
                                </div>
                            </li>   
                        ))
                    ) : (
                            <div className="h-[100vh] w-full flex justify-center items-center">
                                <Spinner className="size-8" />
                            </div>
                    )
                }
                
            </ul>
        </div>
    );
}
