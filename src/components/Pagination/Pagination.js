import React from "react";
import paginationStyles from "./Pagination.module.css";

const Pagination = ({
  itemsPerPage,
  totalItems,
  paginationHandler,
  currentPage
}) => {
  let pageNumbers = [];
  const setPageNumbers = () => {
    if (totalItems > 0) {
      const totalPages = Math.ceil(totalItems / itemsPerPage);
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }

      if (currentPage < 5) {
        pageNumbers = pageNumbers.slice(0, 5);
        pageNumbers.push(totalPages);
      }
      if (currentPage > totalPages - 4) {
        pageNumbers = pageNumbers.slice(totalPages - 5, totalPages);
        pageNumbers.unshift(1);
      } else if (currentPage >= 5 && currentPage <= totalPages - 4) {
        pageNumbers = pageNumbers.slice(currentPage - 3, currentPage + 2);
        pageNumbers.unshift(1);
        pageNumbers.push(totalPages);
      }
    }
  };

  setPageNumbers();

  return (
    <div>
      <ul className={paginationStyles.container}>
        {pageNumbers.map((page, index) => (
          <li
            key={index}
            onClick={() => {
              paginationHandler(page);
            }}
          >
            <div>{page}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
