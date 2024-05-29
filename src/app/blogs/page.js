import { BentoGrid, BentoGridItem } from "../components/BentoGrid";
import { fetchBlogs } from "@/lib/fetchBlogs";
import { Navbar } from "../components/NavBar";
import navItems from "../utils/NavItems";

export default async function Blogs() {
  const blogs = await fetchBlogs();



  return (
    <main className="flex flex-col min-h-screen items-center justify-between">
    <Navbar navItems={navItems} className="custom-classname" />
    <div className="max-w-7xl mx-auto w-full relative overflow-hidden py-44">
      <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
        We sell soap worldwide
      </h2>
      <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
        The journal of credit card usage comprises articles related to credit scores, banking & financial services, and the combination of exciting rewards.
      </p>
      <BentoGrid className="max-w-1xl mx-auto mt-10">
        {blogs.map((blog, i) => (
          <BentoGridItem
            key={blog.uid}
            title={blog.data.title}
            description={`${blog.data.content[0].text.substring(0, 100)}...`}  // Limit the description to 100 characters
            category={blog.data.category}
            image={blog.data.image.url}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  </main>
  );
}
