import { client } from "@/lib/prismic-configuration";

export const fetchClients = async () => {
  try {
    const response = await client.getAllByType("clients");

    return response.map((item: any) => ({
      uid: item.uid,
      title: item.data.title,
      image: item.data.image.url,
    }));
  } catch (error) {
    console.error("Error fetching clients:", error);
    return [];
  }
};
