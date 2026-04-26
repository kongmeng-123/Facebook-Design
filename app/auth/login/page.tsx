import Image from "next/image";
import Link from "next/link";
import '../../globals.css'

export default function Login () {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-[90vh] lg:h-[100vh] gap-10 lg:flex-row lg:gap-0 lg:px-14 xl:px-24">
                <div className="w-full flex flex-col justify-center items-center lg:w-[50vw] lg:items-start">
                    <div className="py-6 lg:py-0">
                        <h1 className="text-5xl font-semibold t-p-color lg:text-8xl xl:text-9xl">Facebook</h1>
                        <p className="text-2xl hidden lg:block">
                            Facebook helps you connect and share <br /> with the people in your life
                        </p>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center lg:justify-end lg:w-[50vw]" >
                    <form className="w-full max-w-md h-92 rounded-lg p-4 flex flex-col items-center justify pt-4 mx-2" style={{boxShadow:"0 0 3px"}}>
                        <div className="w-full m-4">
                            <input type="text" id="userEmail" placeholder="Email or phone number required" className="h-10 border-gray-300 border w-full px-2 rounded-lg" /> <br />
                            <input type="text" id="userPassword" placeholder="Passwrod" className="h-10 border-gray-300 border w-full px-2 rounded-lg mt-3" />
                        </div>
                        <Link href={"./main"} className="w-full bg-p-color h-10 mt-6 rounded-lg text-white font-bold hover:bg-p-hover flex justify-center items-center"><button >Login</button></Link>
                        <Link href={""} className="my-4 h-10 t-p-color hover:text-blue-400">
                            Forgotten Password
                        </Link>
                        <div className="w-full h-[1px] bg-gray-400 "></div>
                        <div className="  flex items-center">
                            <button className="mt-7 bg-s-color text-white p-2 rounded-lg hover:bg-p-hover">Create new account</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
