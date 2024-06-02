import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import { fetchBlogs } from "@/lib/fetchBlogs";

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

      <BentoGrid className="max-w-1xl mx-auto mt-10">
        {blogs.map((item, i) => (
          <BentoGridItem
            key={item.uid}
            title={item.title}
            description={`${item.content[0].text.substring(0, 100)}...`} // Limit the description to 100 characters
            category={item.category}
            image={item.image}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
