import { client } from "@/lib/prismic-configuration";

export const fetchTestimonial = async () => {
  try {
    const response = await client.getAllByType("testimonial");
    return response.map((item: any) => ({
      quote: item.data.review,
      name: item.data.author,
      title: item.data.title,
    }));
  } catch (error) {
    console.error("Error fetching Testimonial:", error);
    return [];
  }
};
