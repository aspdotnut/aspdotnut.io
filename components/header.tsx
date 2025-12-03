'use client'
import Link from "next/link";
import {useState} from "react";

export default function Header(){
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <header className={"sticky top-0 z-10"}>
                <div className={"flex justify-between md:justify-normal gap-10 bg-special p-2 text-xl"}>
                    <Link className={"text-specialText"} href={"/"}>ASPDOTNUT</Link>
                    <div className={"hidden md:flex gap-10"}>
                        <Link className={"hover:text-specialTextHover transition ease-in-out text-specialText"} href={"/"}>HOME</Link>
                        {/*<Link className={"hover:text-specialTextHover transition ease-in-out text-specialText"} href={"https://blog.aspdotnut.io"} rel="noopener noreferrer">BLOG</Link>*/}
                        <Link className={"hover:text-specialTextHover transition ease-in-out text-specialText"} href={"/about"}>ABOUT</Link>
                        <Link className={"hover:text-specialTextHover transition ease-in-out text-specialText"} href={"/socials"}>SOCIALS</Link>
                    </div>
                    <div className={"md:hidden h-[28px] flex items-center justify-center"}>
                        <button
                            onClick={() => {
                                setIsActive(!isActive)
                            }}
                        >
                            <svg width="1.5rem" height="1.5rem" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className="stroke-specialText hover:stroke-specialTextHover transition ease-in-out">
                                <path strokeWidth="0.6" shapeRendering="geometricPrecision"
                                      d="M2 4.5h16M2 10.5h16M2 16.5h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
            <div className={`md:hidden block ${isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} fixed top-16 left-2 z-20 transition ease-in-out duration-300 flex flex-col text-base`}>
                    <Link className={"hover:text-specialTextHover transition ease-in-out text-6xl text-special w-fit"} onClick={()=>{setIsActive(!isActive)}} href={"/"}>HOME</Link>
                    {/*<Link className={"hover:text-specialTextHover transition ease-in-out text-6xl text-special w-fit"} onClick={()=>{setIsActive(!isActive)}} href={"https://blog.aspdotnut.io"} rel="noopener noreferrer">BLOG</Link>*/}
                    <Link className={"hover:text-specialTextHover transition ease-in-out text-6xl text-special w-fit"} onClick={()=>{setIsActive(!isActive)}} href={"/about"}>ABOUT</Link>
                    <Link className={"hover:text-specialTextHover transition ease-in-out text-6xl text-special w-fit"} onClick={()=>{setIsActive(!isActive)}} href={"/socials"}>SOCIALS</Link>
            </div>
            <button className={`block ${isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} bg-darkenedBlur absolute h-full w-full backdrop-blur-sm z-10 transition ease-in-out duration-300 flex flex-col text-base`}
                    onClick={()=>{
                        setIsActive(!isActive)
                    }}
            />
        </>
    );
}