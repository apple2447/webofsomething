"use client";

import { useState } from "react";

export default function BlogPagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = 3;

  return (
    <div className="container py-4">
      <nav>
        <ul className="pagination justify-content-center">

          <li className="page-item">
            <button
              className="page-link"
              onClick={() =>
                setCurrentPage(Math.max(1, currentPage - 1))
              }
            >
              ก่อนหน้า
            </button>
          </li>

          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;

            return (
              <li
                key={page}
                className={`page-item ${
                  currentPage === page ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              </li>
            );
          })}

          <li className="page-item">
            <button
              className="page-link"
              onClick={() =>
                setCurrentPage(
                  Math.min(totalPages, currentPage + 1)
                )
              }
            >
              ถัดไป
            </button>
          </li>

        </ul>
      </nav>
    </div>
  );
}