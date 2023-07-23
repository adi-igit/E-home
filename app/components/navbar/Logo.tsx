"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();

  return(
    <Image 
    onClick={() => router.push('/')}
      src='/images/logo.png'
      alt='logo'
      className="text-blue-500 hidden md:block cursor-pointer"
      width={150}
      height={150}
    />
  )
}