import Image from "next/image";
import Link from "next/link";
import type { ApiType } from "@/libs/apiType";
import NoAnime from "./utilities/NoAnime";
import { memo } from "react";
import Loading from "@/app/loading";

interface props {
  animeData: ApiType;
}

const AnimeCard: React.FC<props> = ({ animeData }) => {
  // try {
    let identity: number;
    if(!animeData.data) {
      return (
        <Loading/>
      )
    }
    if (animeData.data?.length < 1) {
      console.log("kosong");
     return <NoAnime/>;
    }
    return (
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-3 px-4 ">
        {animeData.data?.map((data) => {
          if (identity == data.mal_id) {
            console.log(identity);
            return null;
          }
          identity = data.mal_id;
          return (
            <Link
              href={`/anime/${data.mal_id}`}
              className="cursor-pointer text-color-primary hover:text-color-accent transition-all"
              key={data.mal_id}
            >
              <Image
                src={data.images.webp.image_url}
                alt="okok"
                width={350}
                height={350}
                className="w-full max-h-64 object-cover"
                // placeholder="blur"
              />
              <h3 className="font-bold md:text-xl text-md p-3 ">
                {data.title}
              </h3>
            </Link>
          );
        })}
      </div>
    );
  // } catch (err) {
  //   console.log(err);
  //   return (
  //     <div className="gap-3 px-4 min-h-screen min-w-screen flex items-center justify-center flex-col">
  //       <div className=" bg-gray-200 animate-pulse">
  //         <h3>error tolong di laporkan ya</h3>
  //       </div>
  //     </div>
  //   );
  // }
};

export default memo(AnimeCard);
