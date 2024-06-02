import React from "react";
import Image from "next/image";
import { MacbookScroll } from "./ui/MacbookScroll";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";

export default function HeroSection() {
  return (
    <div
      id="heroSection"
      className="overflow-hidden dark:bg-[#0b0b0f] bg-white w-full">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#c3d740"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="#c3d740"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="#f6ffc4" />
      </div>
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
  );
}
