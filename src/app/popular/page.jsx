"use client";

import Loading from "../loading";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import api from "@/api/api";
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
    if(page <= 0 || page > topAnime.pagination.last_visible_page) {
      return
    }
    console.log(page);
    setpage(page);
  }
  
  console.log(topAnime);
  useEffect(() => {
    fetchData();
  }, [page]);
  try{
  return (
    <>
      <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
      <AnimeCard animeData={topAnime} />
      <Pagination pagging={handlePageChange} pageNumber={page} lastPage={topAnime.pagination.last_visible_page}/>
    </>
  );} catch (err) {
    return <Loading/>
  }
};

export default popular;
