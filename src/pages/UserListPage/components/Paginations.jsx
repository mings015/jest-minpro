/* eslint-disable react/prop-types */
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Paginations = ({ pagination, setPage, handleNext, handlePrev }) => {
  return (
    <div className="my-10">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={handlePrev} />
          </PaginationItem>
          
          {Array.from({ length: pagination.total_pages }, (_, i) => (
            <PaginationItem key={i}>
              <PaginationLink 
                onClick={() => setPage(i + 1)}
                isActive={pagination.page === i + 1}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext onClick={handleNext} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Paginations;
