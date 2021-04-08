import axios from "axios";

const API_URL = "https://graphql.datocms.com";
const API_TOKEN = "f349cbbbde228e7860be9f38d5d982";

type DataWrapper<T> = {
  data: T;
};

export async function fetchAPI<T>(query: string) {
  const payload = await axios.request<DataWrapper<T>>({
    url: API_URL,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    data: JSON.stringify({
      query,
    }),
  });

  return payload;
}
