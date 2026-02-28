import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}
const Layout = ({ children}: LayoutProps) => {
    return ( 
        <div className="min-h-screen flex flex-col">
            <div className="flex-1 h-full w-full">
                { children}
            </div>
        </div>
     );
}
 
export default Layout;