import { client } from "@/lib/prismic-configuration";

export const fetchBlogs = async () => {
  try {
    const response = await client.getAllByType("blog");
    return response;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};
