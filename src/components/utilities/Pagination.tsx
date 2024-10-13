"use client";

type page = (page: number) => void;

const Pagination = ({
  pagging,
  pageNumber,
  lastPage
}: {
  pagging: page;
  pageNumber: number;
  lastPage:number
}) => {
  return (
    <div className="flex justify-center items-center py-4 px-2 gap-4 text-color-primary text-xl">
      <button
        className="transition-all hover:text-color-accent"
        onClick={() => pagging(pageNumber - 1)}
      >
        Prev
      </button>
      <p>{pageNumber} of {lastPage}</p>
      <button
        className="transition-all hover:text-color-accent"
        onClick={() => pagging(pageNumber + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
