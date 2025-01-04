"use client"

import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const notFound = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex items-center justify-center flex-col gap-4">
                <FileSearch size={44} className="text-color-accent" />
                <h3 className="text-color-accent text-4xl font-bold">404 - Not Found!</h3>
                <Link href="/" className="text-color-primary hover:text-color-accent underline transition-all text-2xl">BACK</Link>
            </div>
        </div>
    );
}

export default notFound;