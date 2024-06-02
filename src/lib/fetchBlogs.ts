import { client } from "@/lib/prismic-configuration";

export const fetchBlogs = async () => {
  try {
    const response = await client.getAllByType("blog");
    return response.map((item: any) => ({
      uid: item.uid,
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

export const fetchBlogBySlug = async (slug: string) => {
  try {
    const response = await client.getByUID("blog", slug);
    if (response) {
      const myData = response;
      return {
        uid: myData.uid,
        title: myData.data.title,
        content: myData.data.content,
        category: myData.data.category,
        image: myData.data.image.url,
      };
    }
    throw new Error("Blog not found");
  } catch (error) {
    console.error("Error fetching blog by slug:", error);
    throw error;
  }
};
