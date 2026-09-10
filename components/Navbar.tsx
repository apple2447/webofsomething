"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCloseAll = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    // เพิ่ม fixed-top และ z-3 เพื่อให้ล็อกอยู่บนสุดและลอยเหนือองค์ประกอบอื่น
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body fixed-top z-3" data-bs-theme="dark">
      <div className="container">

        {/* Logo */}
        <Link
          href="/"
          className="navbar-brand fw-bold text-white"
          onClick={handleCloseAll}
        >
          งานกลุ่มน่าจะวุ่นวาย
        </Link>

        {/* Mobile Button (Hamburger) */}
        <button
          type="button"
          className="navbar-toggler"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="mainNavbar"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div
          id="mainNavbar"
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {/* Home */}
            <li className="nav-item">
              <Link
                href="/"
                className="nav-link text-white"
                onClick={handleCloseAll}
              >
                หน้าแรก
              </Link>
            </li>

            {/* Products */}
            <li className="nav-item">
              <Link
                href="/products"
                className="nav-link text-white"
                onClick={handleCloseAll}
              >
                Products
              </Link>
            </li>

            {/* Blog */}
            <li className="nav-item">
              <Link
                href="/blog"
                className="nav-link text-white"
                onClick={handleCloseAll}
              >
                Blog
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="nav-item dropdown">
              <button
                type="button"
                className="nav-link dropdown-toggle btn border-0 text-white bg-transparent shadow-none align-baseline"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-expanded={isDropdownOpen}
              >
                Services
              </button>

              <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                <li>
                  <Link
                    href="/services/web"
                    className="dropdown-item"
                    onClick={handleCloseAll}
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ai"
                    className="dropdown-item"
                    onClick={handleCloseAll}
                  >
                    AI
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/robotics"
                    className="dropdown-item"
                    onClick={handleCloseAll}
                  >
                    Robotics
                  </Link>
                </li>
              </ul>
            </li>

            {/* About */}
            <li className="nav-item">
              <Link
                href="/about"
                className="nav-link text-white"
                onClick={handleCloseAll}
              >
                About
              </Link>
            </li>

          </ul>

          {/* Right Menu */}
          <div className="d-flex gap-2 my-2 my-lg-0">
            <Link
              href="/login"
              className="btn btn-outline-light"
              onClick={handleCloseAll}
            >
              เข้าสู่ระบบ
            </Link>

            <Link
              href="/register"
              className="btn btn-primary"
              onClick={handleCloseAll}
            >
              ลงชื่อเข้าใช้
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}