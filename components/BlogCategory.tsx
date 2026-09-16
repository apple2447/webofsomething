"use client";

import { useState } from "react";

const categories = [
  "ทั้งหมด",
  "Next.js",
  "MongoDB",
  "Web Development",
];

export default function BlogCategory() {
  const [active, setActive] = useState("ทั้งหมด");

  return (
    <div className="container py-4">
      <div className="d-flex gap-2 flex-wrap justify-content-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`btn ${
              active === category
                ? "btn-dark"
                : "btn-outline-secondary"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}