import Link from "next/link";

import { FaInstagram, FaTiktok, FaStrava } from "react-icons/fa";
import { IconType } from "react-icons/lib";

interface FooterItems {
    href: string;
    label: string;
}

interface SocialIttems {
    icon: IconType;
    href: string;
}

const items: FooterItems[] = [
    {   label: "Terms of Use",  href: "/c/terms-of-use" }, 
    {   label: "Privacy Policy", href: "/c/privacy-policy" },
    {   label: "Fur Policy", href: "/c/fur-policy" },
    {   label: "Interest-Based Ads", href: "/c/interest-based-ads" },
    {   label: "24/7 Customer Service (800) 927-7671", href: "/c/contact-us" },
]

const socialIcons: SocialIttems[] =[
    {
        icon: FaInstagram,
        href: "https://www.zappos.com/c/coupon"
    },
    {
        icon: FaTiktok,
        href: "https://www.tiktok.com/@zappos"
    },
    {
        icon: FaStrava,
        href: "https://www.strava.com/clubs/zappos"
    },
]

const aboutZappos: FooterItems[] = [
    {   label: "About",  href: "/c/about" }, 
    {   label: "Careers", href: "/careers" },
    {   label: "Get the Zappos Mobile App", href: "/download" },
    {   label: "amazon Prime benefits", href: "/c/prime-link" },
    {   label: "Zappos VIP Benefits", href: "/c/vip" },
    {   label: "coupons & Sales", href: "/c/coupon" },
]
const customerService: FooterItems[] = [
    {   label: "FAQs",  href: "/c/faqs" }, 
    {   label: "Contact Info", href: "/c/contact-us" },
    {   label: "Ayuda en espanol?", href: "/ayuda" },
    {   label: "shipping And Returns Policy", href: "/c/shipping-returns" },
    {   label: "About Proposition 65", href: "/c/prop65" },
    {   label: "Return Options", href: "/c/returns-trans-option" },
]

const resources: FooterItems[] = [
    {   label: "Size Conversion Charts",  href: "/c/show-size-conversion" }, 
    {   label: "Affiliiate Program", href: "/c/affilliate-program" },
    {   label: "Site Map", href: "/site-map" },
    {   label: "Take Survey", href: "/c/take" },
    {   label: "E-Gift Cards", href: "/c/e-gift-cards" },
    
]
const exploreZappos: FooterItems[] = [
    {   label: "Brands",  href: "/c/brands" }, 
    {   label: "Clothings", href: "/clothings" },
    {   label: "New Arrivals", href: "/new-arrivals" },
    {   label: "Running", href: "/running" },
    {   label: "Shoes", href: "/shoes" },
    {   label: "Zappos Adaptive", href: "/c/adaptive" },
    {   label: "All Departments", href: "/" },
    
]

const Footer = () => {
    return (
        <footer className="w-full h-fit bottom-0 xl:px-40 lg:px-20  bg-white">
            <div className="flex flex-col items-start justify-start gap-y-4 border-b py-10">
                <div className="flex items-center justify-center xl:gap-x-10 lg:gap-x-6">
                    {socialIcons.map((item) => (
                        <Link key={item.href} href={item.href}>
                            <item.icon className="size-8" />
                        </Link>
                    ))}
                </div>
                <div className="grid grid-cols-4 xl:pt-12 lg:pt-10 w-full">
                    <div className="flex items-start  flex-col justify-start gap-4">
                        <h1 className="text-xl font-bold underline underline-offset-4">About Zappos</h1>
                        <div className="flex flex-col items-start justify-start xl:gap-6 gap-4">
                            {aboutZappos.map((item) => (
                                <Link key={item.href} href={item.href} className="capitalize font-semibold hover:underline underline-offset-4 xl:text-base text-md">
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-start  flex-col justify-start gap-4">
                        <h1 className="text-xl font-bold underline underline-offset-4">Customer Service</h1>
                        <div className="flex flex-col items-start justify-start xl:gap-6 gap-4">
                            {customerService.map((item) => (
                                <Link key={item.href} href={item.href} className="capitalize font-semibold hover:underline underline-offset-4 xl:text-base text-md">
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-start  flex-col justify-start gap-4">
                        <h1 className="text-xl font-bold underline underline-offset-4">Resources</h1>
                        <div className="flex flex-col items-start justify-start xl:gap-6 gap-4">
                            {resources.map((item) => (
                                <Link key={item.href} href={item.href} className="capitalize font-semibold hover:underline underline-offset-4 xl:text-base text-md">
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-start  flex-col justify-start gap-4">
                        <h1 className="text-xl font-bold underline underline-offset-4">Explore Zappos</h1>
                        <div className="flex flex-col items-start justify-start xl:gap-6 gap-4">
                            {exploreZappos.map((item) => (
                                <Link key={item.href} href={item.href} className="capitalize font-semibold hover:underline underline-offset-4 xl:text-base text-md">
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between w-full h-fit border-t text-neutral-900 bg-white py-5">
                <span className="text-lg xl:text-2xl font-semibold  ">
                    &copy; 2009–2026 - Zappos.com LLC or its affiliates
                </span>
                <ul className="flex items-center text-md justify-center gap-4 ">
                    {items.map((item) => (
                        <Link href={item.href} key={item.href} className="hover:underline underline-offset-4">
                                {item.label}
                        </Link>
                    ))}
                </ul>
            </div>
        </footer>
      );
}
 
export default Footer;