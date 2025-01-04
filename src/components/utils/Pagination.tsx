interface props {
    page: number
    maxPage: number
    setPage: (page: number) => void
}

const Pagination = ({ page, setPage, maxPage }: props) => {

    const scrolltop = () => {
        scrollTo({
            behavior: 'smooth',
            top: 0
        })
    }

    const movePage = (pages: number) => {
        if (pages < 1 || pages > maxPage) {
            setPage(1);
            return;
        }
        scrolltop();
        setPage(pages);
    }

    return (
        <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-xl">
            <button className="transition-all hover:text-color-accent" onClick={() => movePage(page - 1)}>Prev</button>
            <p>{page} of {maxPage}</p>
            <button className="transition-all hover:text-color-accent" onClick={() => movePage(page + 1)}>Next</button>
        </div>
    )
}

export default Pagination;