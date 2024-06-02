import React from "react";
import { BentoGridItem } from "./BentoGrid";
import { fetchBlogs } from "@/lib/fetchBlogs";
import Link from "next/link";
import Image from "next/image";

const truncateText = (text: any, limit: number) => {
  if (!text) return "";
  const words = text.split(" ");
  if (words.length > limit) {
    return words.slice(0, limit).join(" ") + "...";
  }
  return text;
};

export default async function BlogsSection() {
  const blogs = await fetchBlogs();

  return (
    <div
      id="blogSection"
      className="max-w-7xl mx-auto w-full relative overflow-hidden py-44 px-4">
      <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-black dark:text-white leading-tight sm:leading-snug md:leading-normal">
        Stay Informed with <span className="text-[#c3d740]">Neopaisa</span>{" "}
        Insights
      </h2>
      <p className="text-center text-sm sm:text-base md:text-lg font-normal text-gray-500 max-w-md mt-2 mx-auto leading-relaxed">
        Explore our blog to gain valuable knowledge on personal finance, loan
        management, and smart money strategies. Let Neopaisa guide you to
        financial success.
      </p>

      <div className="grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto mt-8">
        {blogs.map((item: any, i: any) => (
          <div
            key={item?.uid}
            className="row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4">
            {item?.image && (
              <div className="w-full h-48 relative">
                <Image
                  src={item.image}
                  alt={item.title as string}
                  layout="fill"
                  className="rounded-t-xl object-cover"
                />
              </div>
            )}
            <div className="flex flex-col space-y-2">
              {item?.category && (
                <div className="text-sm font-medium text-blue-500 dark:text-blue-400">
                  {item.category}
                </div>
              )}
              {item?.title && (
                <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 text-lg">
                  {item.title}
                </div>
              )}
              {item?.description && (
                <div className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300">
                  {truncateText(item.description, 10)}
                </div>
              )}
              <Link href="/blogs">{item?.uid}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
