'use client'
import ThemeToggler from "../theme/ThemeToggler";
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "@/node_modules/next/navigation";

const Header = () => {

  const[ header, setHeader] = useState(false);
  const pathname = usePathname();


  const handleScroll = () => {
    window.scrollY > 50 ? setHeader(true):setHeader(false)
  };

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll);

    //remove the event
    return ()=> window.removeEventListener('scroll', handleScroll);
  })

  return (
    <header className={`${header
    ? `py-4 bg-white shadow-lg dark:bg-accent`
    : `py-6 dark:bg-transparent` } sticky top-0 z-30 transition-all ${pathname==='/' && 'bg-[#EBDAFD]'}`}>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-8">
            
            {/* nav */}
            <Nav containerStyles="hidden xl:flex gap-x-8 items-center" linkStyles="relative hover:text-primary transition-all" underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"/>
            <ThemeToggler />

            {/* mobile nav */}
            <div className="xl:hidden">
              <MobileNav/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
