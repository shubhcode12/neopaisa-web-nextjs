// src/app/blogs/[slug]/page.tsx
"use client";
import Footer from "@/app/components/Footer";
import { Navbar } from "@/app/components/NavBar";
import navItems from "@/app/utils/NavItems";
import { fetchBlogBySlug } from "@/lib/fetchBlogs";
import { useParams } from "next/navigation";
import Image from "next/image";

const BlogDetail = async () => {
  const { slug } = useParams() as { slug: string };

  const blog = await fetchBlogBySlug(slug);
  
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <main className="relative my-16 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <Navbar navItems={navItems} className="w-full" />

      <div>
        <section className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative overflow-hidden px-6">
          {blog.image && (
            <Image
              className="w-full h-full object-cover rounded-3xl object-center"
              src={blog.image}
              width={1920}
              height={1080}
              alt="NeoPaisa"
            />
          )}

          <div className="absolute inset-0 bg-black opacity-50 rounded-3xl" />

          <div className="absolute inset-0 " />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white space-y-4 px-4 md:px-6 lg:px-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                {blog.title}
              </h1>
              {/* <p className="text-lg text-gray-500 md:text-xl lg:text-xl">
                {slug}
              </p> */}
            </div>
          </div>
        </section>
        <div className="container py-12 md:py-16 lg:py-20 px-10">
          <article className="prose prose-gray max-w-3xl mx-auto dark:prose-invert">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                {blog.title}
              </h1>
              <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <img
                    src="/logo.svg"
                    alt="Author Avatar"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span>NeoPaisa</span>
                </div>
                <span>•</span>
                <span>{Date.now().toLocaleString()}</span>
              </div>
            </div>
            <p className="pt-10">
              {blog.content.map((block: any, index: number) => (
                <p key={index}>
                  {block.text}
                  <div className="border-solid border border-gray-900 mx-4 mt-6" />
                </p>
              ))}
            </p>
          </article>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default BlogDetail;
