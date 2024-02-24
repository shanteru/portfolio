'use client'


import {RiLinkedinFill, RiGithubFill} from 'react-icons/ri';
import Link from '@/node_modules/next/link';

interface SocialProps {
  containerStyles: string;
  iconsStyles: string;
  
}

const icons=[
  {
    path:'/',
    name:<RiLinkedinFill/>
  },

  {
    path:'/',
    name:<RiGithubFill/>
  }
]


const Social: React.FC<SocialProps> = ({containerStyles,iconsStyles}) => {
  return (<div className={`${containerStyles}`}>
    {icons.map((icon,index)=> {
      return <Link href={icon.path} key={index}>
      <div className={`${iconsStyles}`}>{icon.name}</div>
      </Link>
    })}
  </div>)
}

export default Social