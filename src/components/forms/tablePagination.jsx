/* eslint-disable react/prop-types */
import ReactPaginate from 'react-paginate';

const TablePagination = ({
  pageCount,
  totalElements,
  activePage,
  itemsPerPage,
  onPageChange,
}) => {
  const startItem = activePage * itemsPerPage + 1;
  const endItem = Math.min((activePage + 1) * itemsPerPage, totalElements);

  const handlePageClick = (event) => {
    onPageChange(event.selected);
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-y-2">
      <div className="text-base font-medium text-gray-0">
        Showing {`${startItem} to ${endItem} of ${totalElements}`} entries
      </div>
      <ReactPaginate
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        activeClassName="text-white-0 bg-blue-800 h-6 w-6 rounded-full text-center"
        activeLinkClassName="text-white-0"
        previousLabel="Previous"
        pageClassName="border-none cursor-pointer text-gray-0 font-medium "
        pageLinkClassName="text-sm"
        previousClassName="mr-3 text-base font-semibold border-none bg-transparent text-blue-800"
        previousLinkClassName="border-none"
        nextClassName="ml-3 text-base font-semibold border-none bg-transparent text-blue-800"
        nextLinkClassName="border-none"
        disabledLinkClassName="cursor-default text-gray-0 font-medium"
        breakLabel="...."
        breakClassName="text-gray-0"
        containerClassName="flex gap-4"
        forcePage={activePage}
      />
    </div>
  );
};

export default TablePagination;
