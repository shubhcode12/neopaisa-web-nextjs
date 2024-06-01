import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import { fetchBlogs } from "@/lib/fetchBlogs";

export default async function BlogsSection() {
  const blogs = await fetchBlogs();
  console.log(blogs);

  return (
    <div id="blogSection" className="max-w-7xl mx-auto w-full relative overflow-hidden py-44 px-4">
      <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
        We sell soap worldwide
      </h2>
      <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
        The journal of credit card usage comprises articles related to credit
        scores, banking & financial services, and the combination of exciting
        rewards.
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
