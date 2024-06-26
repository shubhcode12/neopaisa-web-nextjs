import { BentoGrid, BentoGridItem } from "../components/ui/BentoGrid";
import { fetchBlogs } from "@/lib/fetchBlogs";
import { Navbar } from "../components/NavBar";
import navItems from "../utils/NavItems";
import BlogsSection from "../components/BlogsSection";

export default async function Blogs() {

  return (
    <main className="flex flex-col min-h-screen items-center justify-between">
      <Navbar navItems={navItems} className="custom-classname" />
      <BlogsSection/>
    </main>
  );
}
