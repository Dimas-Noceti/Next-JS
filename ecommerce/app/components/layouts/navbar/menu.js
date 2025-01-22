"use client";
import Image from "next/image";
import { useState } from "react";
import MenuList from "./menuList";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(true);
    }
    const handleClose = () => {
        setIsOpen(false);
    }
    return (
        <>
        <div onClick={handleOpen} >
        <Image
            src={'/menuBurger.png'}
            alt="Vercel Logo" 
            width={100} height={24}
            />
        <MenuList open={isOpen} handleClose={handleClose} />
        </div>
        </>
    )
}

export default Menu;