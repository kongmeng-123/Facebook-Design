import {acount} from "@/types/acount";
// import walkpaper1 from "/wallpaper1.jpg";
// import walkpaper2 from "/wallpaper2.jpg";
// import walkpaper4 from "/wallpaper4.jpg";
// import walkpaper7 from "/wallpaper7.jpg";
import {acounts} from "@/services/acounts";
import Image from "next/image";


export const AmountPost = ({amountPost = []} : {amountPost:string[]}) => {
    const amount = amountPost.length;
    if (amount === 0) return null;
    if (amount === 1)
        return (
            <div className="aspect-square w-full bg-green-500 ">
                <div className="h-full w-full bg-amber-100">
                   <Image src="/walkpaper1" alt="image one" className="h-full w-full"/>
                </div>
            </div>
        );
    if (amount === 2)
        return (
            <div className="aspect-square w-full bg-green-500 flex gap-1">
                <div className="h-full w-1/2 bg-amber-100">
                    <Image src={amountPost[1]} alt="image one" className="h-full w-full" height={100} width={100} />
                </div>
                <div className="h-full w-1/2 bg-amber-400">
                    <Image src={amountPost[1]} alt="image one" className="h-full w-full" height={100} width={100} />
                </div>
            </div>
        );
    if (amount == 3)
        return (
            <div className="aspect-square w-full bg-green-500 grid grid-cols-2 grid-rows-2 gap-1">
                <div className="bg-amber-300 row-start-1 row-end-3">
                    <Image src= "/walkpaper1" alt="image one" className="h-full w-full" />
                    
                </div>
                <div className="bg-amber-300">
                    <Image src= "/walkpaper1" alt="image one" className="h-full w-full" />

                </div>
                <div className="bg-amber-300">
                    <Image src= "/walkpaper1" alt="image one" className="h-full w-full" />

                </div>
            </div>
        );
    if (amount === 4)
        return (
            <div className={`aspect-square w-full bg-green-500 grid grid-cols-2 grid-rows-2 gap-1`}>
                <div className="h-full w-full bg-amber-100">
                    <Image src= "/walkpaper1" alt="image one" className="h-full w-full" />

                </div>
                <div className="h-full w-full bg-amber-100">
                    <Image src= "/walkpaper1" alt="image one" className="h-full w-full" />

                </div>
                <div className="h-full w-full bg-amber-100">
                    <Image src= "/walkpaper1" alt="image one" className="h-full w-full" />

                </div>
                <div className="h-full w-full bg-amber-100">
                    <Image src= "/walkpaper1" alt="image one" className="h-full w-full" />

                </div>
            </div>
        );
    if (amount > 4)
        return (
            <div className={`aspect-square w-full bg-green-500 grid grid-cols-2 grid-rows-2 gap-1`}>
                <div className="h-full w-full bg-amber-100">
                    <Image src="/walkpaper1" alt="image one" className="h-full w-full" />

                </div>
                <div className="h-full w-full bg-amber-100">
                    <Image src="/walkpaper2" alt="image one" className="h-full w-full" />

                </div>
                <div className="h-full w-full bg-amber-100">
                    <Image src="/walkpaper4" alt="image one" className="h-full w-full" />

                </div>
                <div className="h-full w-full bg-amber-100 relative">
                    <span className="absolute text-white">+ {amount - 4}</span>
                    <Image src="/walkpaper7 "alt="image one" className="h-full w-full" />
                    
                </div>
            </div>
            
        );
};
