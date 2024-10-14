import Link from "next/link";

interface headerProps {
  title: string;
  linkHref?: string;
  linkTitle?: string;
}

const Header: React.FC<headerProps> = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="p-4 pt-6 flex items-center justify-between text-color-primary">
      <h1 className="text-2xl font-bold">{title}</h1>
      {linkTitle && linkHref ? (
        <Link
          href={linkHref}
          className="md:text-xl text-md underline hover:text-color-accent text-color-primary transition-all"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
