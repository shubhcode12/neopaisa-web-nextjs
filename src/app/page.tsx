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
import Footer from "./components/Footer";
import TestimonialSection from "./components/TestimonialSection";

export default async function Home() {
  

  return (
    <main className="relative bg-[#0c0c10] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">

      <Navbar navItems={navItems} className="custom-classname" />

      <HeroSection/>

      <LampDemo />

      <TestimonialSection/>

      <BlogsSection />

    

      {/* <BottomFooter /> */}
      <Footer/>
    </main>
  );
}
