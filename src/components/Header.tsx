import Link from "next/link"

const Header = ({ title, href, hrefTitle }: { title: string, href?: string, hrefTitle?: string }) => {
    return (
        <div className="p-2 px-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-color-primary">{title}</h1>
            {href && hrefTitle &&
                <Link href={href} className="text-xl underline hover:text-color-accent 
                active:text-blue-800 text-color-primary transition-all">{hrefTitle}</Link>
            }
        </div>
    )
}

export default Header