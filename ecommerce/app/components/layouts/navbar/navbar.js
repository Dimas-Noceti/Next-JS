import Image from "next/image";
import React from 'react';
import Menu from "./menu";

export const metadata = {
    title: "Ecommerce Logo",
    description: "Ecommerce para amantes de la tecnologia",
    keywords: "Ecommerce, tienda, tecnologia, tech, pc"
}

const Navbar = () => {
    return (
        <>
        <header className="bg-gray-800 text-white sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Image 
                    alt="logo"
                    src={"/logo.jpg"}
                    width={200}
                    height={200}
                    />
                    <Menu />
                </div>
            </nav>

        </header>
        </>  
    );
}

export default Navbar;