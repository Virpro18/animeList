// import Image from "next/image";
import AnimeCard from "@/components/animeCard";
import Header from "@/components/Header";
import {api} from "@/libs/api";

const page = async ({ params }: { params: { keyword: string } }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  console.log(decodedKeyword);
  const searchAnime = await api(`anime?q=${decodedKeyword}`);
  // console.log(anime);

  return (
    <>
      <section>
        <Header
          title={`pencarian untuk "${decodedKeyword}...."`}
          // linkHref="/popular"
          // linkTitle="Lihat Semua"
        />
        <AnimeCard animeData={searchAnime} />
      </section>
    </>
  );
};

export default page;
