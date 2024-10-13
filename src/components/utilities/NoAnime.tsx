'use client'

import { FileX } from "@phosphor-icons/react";
import Link from "next/link";

const NoAnime = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <FileX size={44} className="text-color-accent"/>
        <h3 className="text-color-accent text-4xl font-bold">Anime Not Found</h3>
        <Link href="/" className="text-color-primary hover:text-color-accent transition-all underline">Back</Link>
      </div>
    </div>
      );
};

export default NoAnime
