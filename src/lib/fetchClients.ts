import { client } from "@/lib/prismic-configuration";

export const fetchClients = async () => {
  try {
    const response = await client.getAllByType("clients");
    console.log(response)
    return response;
  } catch (error) {
    console.error("Error fetching clients:", error);
    return [];
  }
};
