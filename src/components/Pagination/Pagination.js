import React from "react";
import paginationStyles from "./Pagination.module.css";

const Pagination = ({ itemsPerPage, totalItems, paginationHandler }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className={paginationStyles.container}>
        {pageNumbers.map((page, index) => (
          <li key={index}>
            <div
              onClick={() => {
                paginationHandler(page);
              }}
            >
              {page}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
