import AnimeList from "@/components/AnmeList";
import Header from "@/components/Header";
import { fetchs, getNestedAnimes, reproduce } from "@/libs/fetch";
import JikanResponse, { Entry } from "@/types/jikan";

const Home = async () => {
  const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

  const fetchAnimeData = async (url: string, limit: number) => {
    return await fetchs(`${process.env.NEXT_PUBLIC_BASE_JIKAN_URL}${url}?limit=${limit}`);
  };

  const topAnimes: JikanResponse = await fetchAnimeData('/top/anime', 10);
  const newAnimes: JikanResponse = await fetchAnimeData('/seasons/now', 10);
  const recommendedAnimesData: Entry[] = await getNestedAnimes(`${process.env.NEXT_PUBLIC_BASE_JIKAN_URL}/recommendations/anime`, "entry");
  const recommendedAnimes = await reproduce(recommendedAnimesData, 5)
  return (
    <>
      <section>
        <Header title="Top Anime" href="/populer" hrefTitle="See All" />
        <AnimeList api={topAnimes} />
      </section>
      <section>
        <Header title="New Anime" href="/new" hrefTitle="See All" />
        <AnimeList api={newAnimes} />
      </section>
      <section>
        <Header title="Rekomendasi" />
        <AnimeList api={recommendedAnimes} />
      </section>
    </>
  );
};

export default Home;
