"use client";
import React, { useEffect, useState } from "react";
import { LampDemo } from "./components/LampBg";
import { Navbar } from "./components/NavBar";
import navItems from "./utils/NavItems";
import { InfiniteMovingCards } from "./components/InfiniteMovingCards";
import { fetchTestimonial } from "@/lib/fetchTestimonials";
import { BottomFooter } from "./components/BottomFooter";
import BlogsSection from "./components/BlogsSection";
import HeroSection from "./components/HeroSection";

export default async function Home() {
  const testimonialsData = await fetchTestimonial();
  console.log(testimonialsData);

  return (
    <main className="flex min-h-screen bg-[#0b0b0f] flex-col items-center justify-between">
      <Navbar navItems={navItems} className="custom-classname" />

      <HeroSection/>

      <LampDemo />

      {/* <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonialsData}
          direction="right"
          speed="slow"
        />
      </div> */}

      {/* <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonialsData}
          direction="right"
          speed="slow"
        />
      </div> */}

      <BlogsSection />

      <BottomFooter />
    </main>
  );
}
