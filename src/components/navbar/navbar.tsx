import Image from "next/image";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { Search } from "lucide-react";
import { LuCircleUser } from "react-icons/lu";
import { TbShoppingBagPlus } from "react-icons/tb";
import { cn } from "@/lib/utils";

interface NavItems {
    label: string;
    href: string;
}

const items: NavItems[] = [
    {
        label: "Women",
        href: "/women"
    },
    {
        label: "Men",
        href: "/men"
    },
    {
        label: "Kids",
        href: "/kids"
    },
    {
        label: "Brands",
        href: "/brands"
    },
    {
        label: "Sneakers",
        href: "/sneakers"
    },
    {
        label: "Sports",
        href: "/sports"
    },
    {
        label: "Sale",
        href: "/sale"
    },

]

const Navbar = () => {
    return (
        <header className="w-full h-fit pb-4">
            <nav className="w-full bg-black text-white flex items-center justify-center font-semibold xl:text-2xl lg:text-xl lg:py-2 xl:py-3">
                <span className="">Wear-now styles—ready for the snow.</span>
                <Link href="/sale" className="underline ml-2 underline-offset-4">
                    Shop Winter Boots
                </Link>
            </nav>
            <nav className="bg-white flex flex-col items-start justify-between gap-y-4 py-5 xl:px-40 lg:px-20">
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
                     <div className="flex items-center justify-center xl:gap-10 gap-8">
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
                        {items.map((item) => (
                            <Link key={item.href} href={item.href} className={cn("text-[22px] text-black font-bold py-2 px-3 hover:bg-neutral-100", item.label === "Sale" && "text-red-500")}>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <Link href="c/customer-service" className="text-[22px] text-black font-bold py-2 px-3 hover:bg-neutral-100">
                        Help & Support
                    </Link>
                </div>
            </nav>
        </header>
      );
}
 
export default Navbar;