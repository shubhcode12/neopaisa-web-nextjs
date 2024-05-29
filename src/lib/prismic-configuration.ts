import * as prismic from "@prismicio/client";

export const apiEndpoint = "https://neopaisa.cdn.prismic.io/api/v2";

export const client = prismic.createClient(apiEndpoint, {
  fetchOptions: {
    next: { revalidate: 0 },
  },
});
