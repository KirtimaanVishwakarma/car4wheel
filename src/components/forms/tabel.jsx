/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { usePagination, useTable } from 'react-table';

// import Loader from '../loader';
import TablePagination from '../forms/tablePagination';
import { Empty } from 'antd';


const Table = ({
  columns,
  data=[],
  loading,
  pageCount: controlledPageCount,
  totalElements = 0,
  setPageIndex,
  manualPage,
  isError,
  hiddenColumns = [],
}) => {

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    gotoPage,
    state: { pageIndex, pageSize },
    setHiddenColumns,
  } = useTable(
    {
      columns,
      data,
      manualPagination: true,
      pageCount: controlledPageCount,
    },
    usePagination
  );

  useEffect(() => {
    if (hiddenColumns?.length > 0) {
      setHiddenColumns(hiddenColumns);
    }
  }, [hiddenColumns]);

  useEffect(() => {
    if (manualPage === 0) {
      setPageIndex(0);
      gotoPage(0);
    }
  }, [manualPage]);

  if (isError) {
    return (
      <div className="py-32 text-center text-xl font-medium text-red-100">
        Oops! Something went wrong.
      </div>
    );
  }

  return (
    <>
      <div className="relative mb-6 overflow-x-auto">
        {loading && (
          <div className="absolute left-1/2 flex h-96 items-center justify-center">
            {/* <Loader /> */}
            Loading...
          </div>
        )}
        <table
          {...getTableProps()}
          className={`mt-10 w-full border-spacing-0 ${loading && 'opacity-50'}`}
        >
          <thead className="text-left">
            {headerGroups.map((headerGroup, i) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={i}>
                {headerGroup.headers.map((column, index) => (
                  <th
                    className="m-0 border-b border-solid border-gray-g9 p-2 text-sm font-medium text-gray-0"
                    {...column.getHeaderProps()}
                    key={index}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            <>
              {page.length > 0 && !loading ? (
                page.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} key={i}>
                      {row.cells.map((cell, index) => {
                        return (
                          <td
                            className="m-0 border-b border-solid border-gray-g9 py-5 px-2 text-sm font-medium leading-5 text-black"
                            {...cell.getCellProps()}
                            key={index}
                          >
                            {cell.render('Cell')}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })
              ) : (
                <tr className="h-96">
                  {!loading && (
                    <td
                      colSpan={columns.length - (hiddenColumns?.length || 0)}
                      className="text-center text-2xl font-medium text-black"
                    >
              <Empty />
                    </td>
                  )}
                </tr>
              )}
            </>
          </tbody>
        </table>
      </div>

      {controlledPageCount > 1 && (
        <div className={`${loading && 'opacity-50'}`}>
          <TablePagination
            pageCount={controlledPageCount}
            itemsPerPage={pageSize}
            onPageChange={(pageNum) => {
              setPageIndex(pageNum);
              gotoPage(pageNum);
            }}
            totalElements={totalElements}
            activePage={pageIndex}
          />
        </div>
      )}
    </>
  );
};

export default Table;
