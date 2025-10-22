import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  totalItems: number;
  itemsPerPage: number;
  onPageChange?: (page: number) => void;
};

export default function Pagination({ totalItems, itemsPerPage, onPageChange }: Props) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [page, setPage] = useState(1);

  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
      onPageChange?.(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
      onPageChange?.(page - 1);
    }
  };

  return (
    <div className="absolute bottom-30 lg:bottom-40 right-[50%] translate-x-[50%] flex justify-center items-center gap-3 pb-3 mt-1.5">
      <button
        onClick={prevPage}
        className="bg-[#1F8459] text-white w-8 h-8 rounded-[8px] flex justify-center items-center hover:bg-[#2ac884d1] disabled:opacity-50"
        disabled={page === 1}
      >
        <ChevronLeft size={18} />
      </button>

      <span className="text-gray-700 font-semibold">
        {page}/{totalPages}
      </span>

      <button
        onClick={nextPage}
        className="bg-[#1F8459] text-white w-8 h-8 rounded-[8px] flex justify-center items-center hover:bg-[#2ac884d1] disabled:opacity-50"
        disabled={page === totalPages}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
