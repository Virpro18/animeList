import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
    return (
        <header className="bg-color-accent text-white">
            <div className="flex justify-between md:items-center md:flex-row flex-col p-4 gap-2">
                <Link href={"/"} className="text-2xl font-bold">AYONIME</Link>
                <InputSearch />
            </div>
        </header>
    )
}

export default Navbar;