// "use client";
type page = (page: number) => void;

const Pagination = ({
  pagging,
  pageNumber,
  lastPage,
}: {
  pagging: page;
  pageNumber: number;
  lastPage: number;
}) => {
  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-xl">
      {pageNumber === 1 ? null : (
        <button
          className="transition-all hover:text-color-accent"
          onClick={() => pagging(1)}
        >
          first
        </button>
      )}

      <button
        className="transition-all hover:text-color-accent"
        onClick={() => pagging(pageNumber - 1)}
      >
        Prev
      </button>
      <p>
        {pageNumber} of {lastPage}
      </p>
      <button
        className="transition-all hover:text-color-accent"
        onClick={() => pagging(pageNumber + 1)}
      >
        Next
      </button>
      {pageNumber === lastPage ? null : (
        <button
          className="transition-all hover:text-color-accent"
          onClick={() => pagging(lastPage)}
        >
          Last
        </button>
      )}
    </div>
  );
};

export default Pagination;
