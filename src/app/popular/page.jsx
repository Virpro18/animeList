"use client";

import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import { api } from "@/libs/api";
import { useEffect, useState } from "react";
import AnimeCard from "@/components/animeCard";

const popular = () => {
  const [page, setpage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);
  const fetchData = async () => {
    const data = await api(`top/anime?page=${page}`);
    setTopAnime(data);
    // console.log(topAnime);
  };
  function handlePageChange(page) {
    if (page <= 0 || page > topAnime.pagination.last_visible_page) {
      return;
    }
    console.log(page);
    setpage(page);
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  console.log(topAnime);
  useEffect(() => {
    fetchData();
  }, [page]);
  try {
    return (
      <>
        <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
        <section>
          <AnimeCard animeData={topAnime} />
        </section>
        <Pagination
          pagging={handlePageChange}
          pageNumber={page}
          lastPage={topAnime.pagination?.last_visible_page}
        />
      </>
    );
  } catch (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold text-red-500">{error.message}</h1>
      </div>
    );
  }
};
export default popular;
