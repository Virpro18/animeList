import AnimeList from "@/components/AnmeList"
import Header from "@/components/Header"
import { fetchs } from "@/libs/fetch"
import JikanResponse from "@/types/jikan"

const search = async ({ params }: { params: Promise<{ keyword: string }> }) => {
    const keyword = (await params).keyword
    const decodedKeyword = decodeURIComponent(keyword)
    const animes: JikanResponse = await fetchs(`${process.env.NEXT_PUBLIC_BASE_JIKAN_URL}/anime?q=${decodedKeyword}`)
    console.log(keyword)
    return (
        <>
            <section>
                <Header title={`Pencarian untuk ${decodedKeyword}....`} />
                <AnimeList api={animes} />
            </section>
        </>
    )
}

export default search