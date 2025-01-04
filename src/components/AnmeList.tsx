import JikanResponse, { Entry, } from "@/types/jikan"
import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api }: {
    api: JikanResponse | { data: Entry[] }
}) => {
    // if (!api?.data) return (
    //     <div className="flex justify-center items-center h-screen">
    //         <h1>Loading...</h1>
    //     </div>
    // )
    // Filter out duplicates by mal_id  
    const uniqueAnime = api?.data?.filter((anime, index, self) =>
        index === self.findIndex((a) => a.mal_id === anime.mal_id)
    );

    return (
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-5 p-2 px-4">
            {uniqueAnime?.map(anime => {
                return (
                    <Link href={`/anime/${anime.mal_id}`} key={anime.mal_id} className="bg-white shadow-md rounded-md text-color-primary hover:text-color-accent transition-all">
                        <Image src={anime.images.webp.image_url} alt="place" width={600} height={350} className="w-full max-h-64 object-cover" />
                        <h3 className="font-bold md:text-xl text-md p-4">{anime.title}</h3>
                    </Link>
                )
            })}
        </div>
    )
}

export default AnimeList