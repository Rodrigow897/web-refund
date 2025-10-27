import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: Props) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="absolute bottom-30 lg:bottom-40 right-[50%] translate-x-[50%] flex justify-center items-center gap-3 pb-3 mt-1.5">
      <button
        onClick={prevPage}
        className="bg-[#1F8459] text-white w-8 h-8 rounded-[8px] flex justify-center items-center hover:bg-[#2ac884d1] disabled:opacity-50"
        disabled={currentPage === 1}
      >
        <ChevronLeft size={18} />
      </button>

      <span className="text-gray-700 font-semibold">
        {currentPage}/{totalPages || 1}
      </span>

      <button
        onClick={nextPage}
        className="bg-[#1F8459] text-white w-8 h-8 rounded-[8px] flex justify-center items-center hover:bg-[#2ac884d1] disabled:opacity-50"
        disabled={currentPage === totalPages || totalPages === 0}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
