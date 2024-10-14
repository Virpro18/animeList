import { api } from "@/libs/api";
import type { AnimeTypeId } from "@/libs/apiType";
// import React from "react";

const Page = async ({
  params: { id }
}: {
  params: {
    id: string;
  };
}) => {
    console.log({id})
    const anime:AnimeTypeId = await api(`anime/${id}`);
  return (
    <div className="p-4">
      <h3 className="text-2xl text-color-primary">{anime.data.title} - {anime.data.year}</h3>
    </div>
  );
};

export default Page;
