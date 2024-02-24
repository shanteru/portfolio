'use client'
import React from 'react'
import Link from '@/node_modules/next/link'
import Image from '@/node_modules/next/image'
import { useTheme } from "next-themes"

const Logo = () => {
  const lightPath='/logo.svg'
  const darkPath='/logo-dark.svg'

  const { theme } = useTheme();
  const logoPath = theme === 'dark' ? darkPath : lightPath;
  return (
    <Link href='/'>
      <Image src={logoPath} width={54} height={54} priority alt=''/>
    </Link>
  )
}

export default Logo