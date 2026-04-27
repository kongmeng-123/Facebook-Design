import {acount} from "@/types/acount";
// import walkpaper1 from "/wallpaper1.jpg";
// import walkpaper2 from "/wallpaper2.jpg";
// import walkpaper4 from "/wallpaper4.jpg";
// import walkpaper7 from "/wallpaper7.jpg";
import {acounts} from "@/services/acounts";
import Image from "next/image";
import { srcType } from "@/types/postContent";


export const AmountPost = ({amountPost = []} : {amountPost:srcType[]}) => {
    const amount = amountPost.length;
    if (amount === 0) return null;
    if (amount === 1)
        return (
            <div className="aspect-square w-full bg-second/20  ">
                <div className="h-full w-full relative bg-white ">
                   <Image src= {amountPost[0].src} alt="image one" fill className="object-contain"/>
                </div>
            </div>
        );
    if (amount === 2)
        return (
            <div className="aspect-square w-full bg-second/20  flex gap-1">
                <div className="h-full w-1/2 relative bg-white">
                    <Image src= {amountPost[0].src} alt="image one" fill className="object-contain" />
                </div>
                <div className="h-full w-1/2  relative bg-white">
                    <Image src={amountPost[1].src} alt="image one" fill className="object-contain"/>
                </div>
            </div>
        );
    if (amount == 3)
        return (
            <div className="aspect-square w-full bg-second/20  grid grid-cols-2 grid-rows-2 gap-1">
                <div className=" row-start-1 row-end-3 relative bg-white">
                    <Image src= {amountPost[0].src} alt="image one" fill className="object-contain" />
                    
                </div>
                <div className=" relative bg-white">
                    <Image src= {amountPost[1].src} alt="image one" fill className="object-contain" />

                </div>
                <div className=" relative bg-white">
                    <Image src= {amountPost[2].src} alt="image one" fill className="object-contain" />

                </div>
            </div>
        );
    if (amount === 4)
        return (
            <div className={`aspect-square w-full bg-second/20  grid grid-cols-2 grid-rows-2 gap-1`}>
                <div className="h-full w-full relative bg-white object-contain ">
                    <Image src= {amountPost[0].src} alt="image one" fill className="object-contain" />

                </div>
                <div className="h-full w-full relative bg-white object-contain">
                    <Image src= {amountPost[1].src} alt="image one" fill className="object-contain" />

                </div>
                <div className="h-full w-full relative bg-white object-contain">
                    <Image src= {amountPost[2].src} alt="image one" fill className="object-contain" />

                </div>
                <div className="h-full w-full relative bg-white object-contain">
                    <Image src= {amountPost[3].src} alt="image one" fill className="object-contain" />

                </div>
            </div>
        );
    if (amount > 4)
        return (
            <div className={`aspect-square w-full bg-second/20  grid grid-cols-2 grid-rows-2 gap-1`}>
                <div className="h-full w-full relative bg-white">
                    <Image src={amountPost[0].src} alt="image one" fill className="object-contain" />

                </div>
                <div className="h-full w-full relative bg-white">
                    <Image src={amountPost[1].src} alt="image one" fill className="object-contain" />

                </div>
                <div className="h-full w-full relative bg-white">
                    <Image src={amountPost[2].src} alt="image one" fill className="object-contain" />

                </div>
                <div className="h-full w-full relative bg-white flex justify-center items-center">
                    <Image src={amountPost[3].src} alt="image one" fill className="object-contain" />
                    <div className="h-full w-full bg-second/40 z-2 absolute"></div>
                    <span className="absolute text-black z-2 text-2xl">+ {amount - 4}</span>

                    
                </div>
            </div>
            
        );
};
