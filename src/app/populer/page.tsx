"use client";

import { useState, useEffect } from "react";
import { fetchs } from "@/libs/fetch";
import HeaderMenu from "@/components/utils/HeaderMenu";
import Pagination from "@/components/utils/Pagination";
import JikanResponse from "@/types/jikan";
import AnimeList from "@/components/AnmeList";

const Populer = () => {
    const [page, setPage] = useState(1);
    const [topAnimes, setTopAnimes] = useState<JikanResponse>({} as JikanResponse);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchs(`${process.env.NEXT_PUBLIC_BASE_JIKAN_URL}/top/anime/?page=${page}`);
            setTopAnimes(data);
        };
        fetchData();
    }, [page]);
    return (
        <>
            <HeaderMenu title={`Anime Terpopuler #${page}`} />
            <AnimeList api={topAnimes} />
            <Pagination page={page} setPage={setPage} maxPage={topAnimes?.pagination?.last_visible_page} />
        </>
    );
}

export default Populer;