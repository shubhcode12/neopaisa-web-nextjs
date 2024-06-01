import { client } from "@/lib/prismic-configuration";

export const fetchBlogs = async () => {
  try {
    const response = await client.getAllByType("blog");
    return response.map((item: any)=>({
      uid: item.data.uid,
      title: item.data.title,
      content: item.data.content,
      category: item.data.category,
      image: item.data.image.url,
    }));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};
