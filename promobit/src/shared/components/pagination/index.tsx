import ReactPaginate from "react-paginate";

import { Ul } from "./styes";

interface PaginationProps {
  setCurrentPage: (input: number) => void;
};

export function Pagination ({setCurrentPage}: PaginationProps) {

  return (
       <Ul>
            <ReactPaginate
              previousLabel={<p>{"<"}</p>}
              nextLabel={<p>{">"}</p>}
              breakLabel="..."
              breakClassName="break-me"
              pageCount={500}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={pagination => {
                setCurrentPage(pagination.selected + 1)
              }}
              containerClassName="pagination"
              activeClassName="active"
            />
        </Ul>
  );
};