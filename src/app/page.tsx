// import Image from "next/image";
import AnimeCard from "@/components/animeCard";
import Header from "@/components/Header";
import { api } from "@/libs/api";

const page = async () => {
  // const res = await fetch(
  //   `${process.env.NEXT_PUBLIC_JIKAN_BASE_API_URL}top/anime?limit=10?sfw=true`
  // );
  const topAnime = await api("top/anime?limit=10");
  // console.log(topAnime);
  const newAnime = await api("seasons/now");
  // console.log(anime);

  return (
    <>
      <section>
        <Header
          title="Paling Populer"
          linkHref="/popular"
          linkTitle="Lihat Semua"
        />
        <AnimeCard animeData={topAnime} />
      </section>

      <section>
        <Header title="Anime Baru" linkHref="/new" linkTitle="Lihat Semua" />
        <AnimeCard animeData={newAnime} />
      </section>
    </>
  );
};

export default page;
