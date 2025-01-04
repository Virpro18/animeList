"use server";

import JikanResponse, { Entry, JikanRecomendedAnime } from "@/types/jikan";

export const fetchs = async (url: string): Promise<any> => {
  const maxRetries = 3;
  let attempts = 0;

  while (attempts < maxRetries) {
    try {
      if (url.includes("?")) {
        url = `${url}&`;
        console.log(true);
      } else {
        url = `${url}?`;
      }
      const res = await fetch(`${url}sfw=true`);
      console.log(`${url}sfw=true`);
      return await res.json();
    } catch (error) {
      console.log(`Attempt ${attempts + 1} failed:`, error);
      attempts++;
      if (attempts >= maxRetries) {
        return undefined;
      }
    }
  }
};

export const getNestedAnimes = async (
  resource: string,
  objectProperty: string
) => {
  const response: JikanRecomendedAnime = await fetchs(resource);
  return response.data.flatMap((item) => item[objectProperty]);
};

export const reproduce = async (data: Entry[], gap: number = 5) => {
  const first = Math.floor(Math.random() * (data.length - gap) + 1);
  const last = first + gap;
  console.log({ first, last });

  const response = { data: data.slice(first, last) };
  return response;
};
