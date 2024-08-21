import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
    
  return (
    <div className="pagintaion">
      <nav aria-label="Page navigation example" className="bg-inherit pagintion-wrapper">
        <ul className="inline-flex -space-x-px text-base h-10 ">
          <li
            className={`flex items-center justify-center px-4 h-10 ms-0 prev leading-tight text-white bg-inherit  rounded-s-lg hover:bg-[#2BD17E] hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 ${
              currentPage === 1 ? "pointer-events-none text-gray-400" : "text-white"
            }`}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Prev
          </li>
          {[...Array(totalPages)].map((val, index) => (
            <li
              key={index + 1}
              className={`flex items-center justify-center px-4 h-10 leading-tight hover:bg-[#2BD17E] rounded-lg hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                currentPage === index + 1 ? "text-[white] !bg-[#2BD17E]" : "text-white bg-inherit"
              }`}
              onClick={() => onPageChange(index + 1)}
            >
              {index + 1}
            </li>
          ))}

          <li
            className={`flex items-center justify-center next px-4 h-10 leading-tight  bg-inherit  rounded-e-lg  hover:bg-[#2BD17E] hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
              currentPage === totalPages ? "pointer-events-none text-gray-400" : "text-white"
            }`}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </li>
        </ul>
      </nav>
    </div>
  );
}
