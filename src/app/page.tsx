"use client";
import React, { useEffect, useState } from "react";
import { LampDemo } from "./components/LampBg";
import { Navbar } from "./components/NavBar";
import navItems from "./utils/NavItems";
import Image from "next/image";
import { InfiniteMovingCards } from "./components/InfiniteMovingCards";
import { fetchTestimonial } from "@/lib/fetchTestimonials";
import { BottomFooter } from "./components/BottomFooter";
import { MacbookScroll } from "./components/MacbookScroll";
import Link from "next/link";

export default async function Home() {
  const testimonialsData = await fetchTestimonial();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar navItems={navItems} className="custom-classname" />

      <div className="overflow-hidden dark:bg-[#0b0b0f] bg-white w-full">
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

      <LampDemo />

      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonialsData}
          direction="right"
          speed="slow"
        />
      </div>

      {/* <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonialsData}
          direction="right"
          speed="slow"
        />
      </div> */}

      <BottomFooter />
    </main>
  );
}
