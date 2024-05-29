"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const BottomFooter = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/logo.svg"
            alt="Next.js Logo"
            width={80}
            height={37}
            priority
          />
          <span className="text-base leading-[1.6] text-gray-400 font-normal mt-2">
            copyright © 2020-24 NeoPaisa.com
          </span>
        </motion.div>
      </div>
    </div>
  );
};
