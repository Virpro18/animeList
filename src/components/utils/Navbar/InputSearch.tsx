"use client";

import Swal from 'sweetalert2'
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
    const searchRef = useRef<HTMLInputElement>(null);
    const router = useRouter();
    /* eslint-enable @typescript-eslint/no-empty-object-type */
    interface HandleSearchEvent extends React.MouseEvent<HTMLButtonElement> { }
    /* eslint-enable @typescript-eslint/no-empty-object-type */

    const handleSearch = (e: HandleSearchEvent) => {
        e.preventDefault();
        const keyword = searchRef.current?.value
        if (!keyword || keyword?.trim() === "") {
            return Swal.fire({
                title: "Input kosong",
                text: "ente kadang kadang ente",
                icon: "error",
                confirmButtonText: "OK"

            })
        }
        router.push(`/search/${keyword.trim()}`);
    }

    return (
        <div className="relative text-black">
            <input type="text" placeholder="search your anime...." className="p-2 rounded w-full" ref={searchRef} onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(e as any); }} />
            <button className="absolute top-2 end-2" onClick={handleSearch}>
                <MagnifyingGlass size={24} />
            </button>
        </div>
    )
}

export default InputSearch;