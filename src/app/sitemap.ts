import { fetchBlogs } from "@/lib/fetchBlogs";
import { MetadataRoute } from "next";

export default async function sitemap() {
  const base_url = "https://neopaisa.com";
  const responce = await fetchBlogs();
  const blogPosts = responce.map((post: any) => {
    return {
      url: `${base_url}/blogs/${post?.uid}`,
      lastModified: new Date(),
    };
  });

  return [
    {
      url: "https://neopaisa.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://neopaisa.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://neopaisa.com/blogs",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://neopaisa.com/privacy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://neopaisa.com/terms",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },

    ...blogPosts,
  ];
}
