"use client";
import Image from "next/image";
import { LampDemo } from "./components/LampBg";
import { Navbar } from "./components/NavBar";
import navItems from "./utils/NavItems";
import { MaskContainer } from "./components/MaskEffect";
import { InfiniteMovingCards } from "./components/InfiniteMovingCards";
import { fetchTestimonial } from "@/lib/fetchTestimonials";
import { BottomFooter } from "./components/BottomFooter";

export default async function Home() {
  const testimonialsData = await fetchTestimonial();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar navItems={navItems} className="custom-classname" />
      <LampDemo />

      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonialsData}
          direction="right"
          speed="slow"
        />
      </div>

      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
            Your personal data and information are fully encrypted and securely
            protected. We've meticulously ensured there’s no room for error,
            leaving nothing to chance.
          </p>
        }
        className="h-[40rem] ">
        Your personal data and information are fully{" "}
        <span className="text-[#c3d740]">encrypted</span>
        and securely <span className="text-[#c3d740]">protected. </span>. We've
        meticulously ensured there’s no room for error, leaving nothing to
        chance.
      </MaskContainer>

      <BottomFooter/>
    </main>
  );
}
