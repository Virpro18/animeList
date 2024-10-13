"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef(null);
  const router = useRouter();

  const handleSearch = (e) => {
      if (e.key == "Enter" || e.type == "click") {
    e.preventDefault();
    const keyword = searchRef.current.value;
      if (keyword != "") {
          router.push(`/search/${keyword}`); //mengarahakn ke halaman search dan mengirimkan keyword ke halaman search
          return;
        }
        alert("Masukkan keyword");
    }
  };

  return (
    <div className="relative" id="input">
      <input
        type="text"
        placeholder="Cari Anime...."
        ref={searchRef}
        className="w-full p-2 rounded"
        onKeyDown={handleSearch}
      />
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} /> {/*icon phosphor*/}
      </button>
    </div>
  );
};

export default InputSearch;
