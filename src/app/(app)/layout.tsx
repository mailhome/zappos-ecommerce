import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}
const Layout = ({ children}: LayoutProps) => {
    return ( 
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-1 h-full w-full bg-[#f4f4f0]">
                { children}    
            </div>
            <Footer />
        </div>
     );
}
 
export default Layout;