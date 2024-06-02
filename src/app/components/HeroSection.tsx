import React from 'react'
import Image from "next/image";
import { MacbookScroll } from "./ui/MacbookScroll";
import Link from "next/link";


export default function HeroSection() {
  return (
    <div id='heroSection' className="overflow-hidden dark:bg-[#0b0b0f] bg-white w-full">
    <MacbookScroll
      title={
        <span>
          Your Instant Loan Companion
          <br /> NeoPaisa.com
        </span>
      }
      badge={
        <Link href="https://neopaisa.com/">
          <Image
            src="logo.svg"
            width={30}
            height={20}
            alt="ss"
            className="flex-shrink-0 rounded-md shadow-2xl"
          />
        </Link>
      }
      src={`/linear.png`}
      showGradient={false}
    />
  </div>
  )
}
