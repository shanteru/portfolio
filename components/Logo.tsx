import React from 'react'
import Link from '@/node_modules/next/link'
import Image from '@/node_modules/next/image'
const Logo = () => {
  return (
    <Link href='/'>
      <Image src='/logo.png' width={54} height={54} priority alt=''/>
    </Link>
  )
}

export default Logo