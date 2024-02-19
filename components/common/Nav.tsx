'use client'
import Link from '@/node_modules/next/link';
import { usePathname } from '@/node_modules/next/navigation';
import React from 'react'
import {motion} from 'framer-motion';

interface NavProps {
    containerStyles: string;
    linkStyles: string;
    underlineStyles?: string;
  }


  const links =[
    {path:'/', name:'home'},
    {path:'/projects', name:'my projects'},
    {path:'/contact', name:'contact'},
  ]

const Nav: React.FC<NavProps> = ({containerStyles, linkStyles,underlineStyles}) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index)=> {
        return <Link href={link.path} key={index} className={`capitalize ${linkStyles}`}>
          {link.path === path && (
            < motion.span initial={{y:'-100%'}} animate={{y:0}} transition={{type:'tween'}} layoutId='underline' className={`${underlineStyles}`} />
          )}
          {link.name}
          </Link>
      })}
    </nav>
  )
}

export default Nav