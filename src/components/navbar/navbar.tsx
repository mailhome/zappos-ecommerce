"use client"

import Image from "next/image";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { ChevronRight, Menu, Search } from "lucide-react";
import { LuCircleUser } from "react-icons/lu";
import { TbShoppingBagPlus } from "react-icons/tb";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { useState } from "react";
import { itemsDesktop, itemsMobile } from "./navbar-data";



const Navbar = () => {
    const [openMobile, setOpenMobile] = useState(false);
    return (
        <header className="w-full h-fit pb-4">
            <nav className="w-full bg-black text-white font-semibold lg:py-2 xl:py-3 justify-center flex md:py-2">
                <p className="md:w-full w-8/12  py-2 2xl:text-2xl xl:text-2xl lg:text-xl text-center text-lg ">Wear-now styles—ready for the snow.<Link href="/sale" className="underline ml-2 underline-offset-4">
                    Shop Winter Boots
                </Link></p>
            </nav>
            <nav className="bg-white hidden lg:flex flex-col items-start justify-between gap-y-4 py-5 xl:px-40 lg:px-20">
                <div className="flex w-full items-start justify-between">
                    <div className="flex items-center justify-start xl:gap-12 lg:gap-10">
                            {/* Logo */}
                            <Link href="/" className="hidden xl:flex">
                                <Image 
                                src="/zapps.svg" 
                                alt="Logo" 
                                height={160}
                                width={160} 
                                className="" />
                            </Link>
                            <Link href="/" className="hidden lg:flex xl:hidden">
                                <Image 
                                src="/zapps.svg" 
                                alt="Logo" 
                                height={130}
                                width={130} 
                                className="" />
                            </Link>

                        {/* Search  */}
                        <div className="relative flex items-center">
                            {/* TODO: Searrch Functionalitiies */}
                            <Input 
                            placeholder="Search for shoes, clothes, etc" 
                            className="placeholder:text-[20px] py-6 placeholder:text-neutral-700 w-170 pl-12 rounded-none" />
                            <Search className="absolute ml-4 text-neutral-400  " />
                            <Button variant="ghost" className="border-t border-r border-b text-black uppercase text-xl font-bold py-6 rounded-none cursor-pointer">Search</Button>
                        </div>
                    </div>   
                     <div className="flex items-center justify-center xl:gap-10 lg:gap-4">
                        <div>
                            <LuCircleUser className="size-10 cursor-pointer" />
                        </div>
                        <div>
                            <TbShoppingBagPlus className="size-10 cursor-pointer" />
                        </div> 
                     </div>
                </div>
                <div className="flex items-center justify-between w-full h-fit pt-4 xl:pt-6 border-b pb-4">
                    <div className="flex items-center justify-center xl:gap-10 gap-8">
                        {itemsDesktop.map((item) => (
                            <Link key={item.href} href={item.href} className={cn("text-[20px] text-black font-bold py-2 px-3 hover:bg-neutral-100", item.label === "Sale" && "text-red-500", item.label === "Help & Support" && "hidden" )}>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <Link href="c/customer-service" className="text-[20px] text-black font-bold py-2 px-3 hover:bg-neutral-100">
                        Help & Support
                    </Link>
                </div>
            </nav>

            <nav className="flex py-6 lg:hidden items-center justify-between px-4 md:px-10">
                <Link href="/" className="">
                    <Image
                        src="/zapps.svg"
                        alt="Logo"
                        height={120}
                        width={120}
                        className="" />
                </Link>

                <div className="flex items-center justify-center md:gap-4 gap-4">
                    <div className="">
                     <Search className="md:size-10 size-8 text-neutral-700" />
                    </div>
                    <div>
                        <TbShoppingBagPlus className="size-10 cursor-pointer" />
                    </div> 
                    <Sheet open={openMobile} onOpenChange={setOpenMobile}>
                        <SheetTrigger>
                            <Menu className="md:size-10 size-8" />
                        </SheetTrigger>
                        <SheetContent side="right" showCloseButton className="w-full">
                             <SheetHeader>
                                <div className="border-b pb-2">
                                    <LuCircleUser className=" md:size-10 size-8 cursor-pointer" />
                                </div>
                             </SheetHeader>
                             <div className="flex flex-col items-start justify-start gap-4">
                                
                                <div className="flex flex-col items-start justify-start gap-4 w-full px-2">
                                    {itemsMobile.map((item) => (
                                        <div key={item.label} className={cn("text-md text-black font-bold py-2 px-3 hover:bg-neutral-100 flex items-center justify-between w-full border-b pb-2", item.label === "Sale" && "text-red-500")}>
                                            {item.label}
                                            <ChevronRight className="text-neutral-700" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                   
                </div>
            </nav>
        </header>
      );
}
 
export default Navbar;