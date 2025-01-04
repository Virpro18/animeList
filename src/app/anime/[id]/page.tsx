import VideoPlayer from "@/components/utils/VideoPlayer"
import { fetchs } from "@/libs/fetch"
import { JikanData } from "@/types/jikan"
import Image from "next/image"

interface response {
    data: JikanData
}

const anime = async ({ params }: { params: Promise<{ id: string }>  }
) => {
    const { id } = await params
    const anime: response = await fetchs(`https://api.jikan.moe/v4/anime/${id}`)
    return (
        <>
            <div className="pt-4 px-4">
                <h3 className="text-color-primary text-2xl font-bold">{anime.data?.title} - {anime.data.year}</h3>
            </div>
            <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>PERINGKAT</h3>
                    <p>{anime.data.rank}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>SKOR</h3>
                    <p>{anime.data.score}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>STATUS</h3>
                    <p>{anime.data.status}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
                    <h3>EPISODE</h3>
                    <p>{anime.data.episodes}</p>
                </div>
            </div>
            <div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
                <Image
                    src={anime.data.images.webp.image_url}
                    alt={anime.data.images.jpg.image_url}
                    width={250}
                    height={250}
                    className="w-full rounded object-cover"
                ></Image>
                <p className="text-justify sm:text-lg">{anime.data.synopsis}</p>
            </div>
            <div>
                <VideoPlayer YoutubeId={anime.data.trailer.youtube_id} />
            </div>
        </>
    )
}

export default anime