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
    <nav className="navbar site-navbar navbar-expand-lg border-bottom border-body fixed-top z-3" data-bs-theme="dark">
      <div className="container">
        <Link href="/" className="navbar-brand site-navbar__brand" onClick={handleCloseAll}>
          งานกลุ่มน่าจะวุ่นวาย
        </Link>

        <button
          type="button"
          className="navbar-toggler site-navbar__toggler"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="mainNavbar"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="mainNavbar" className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav site-navbar__links me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link site-navbar__link" onClick={handleCloseAll}>
                หน้าแรก
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/products" className="nav-link site-navbar__link" onClick={handleCloseAll}>
                ผลิตภัณฑ์
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog" className="nav-link site-navbar__link" onClick={handleCloseAll}>
                ประกาศ
              </Link>
            </li>

            <li className="nav-item dropdown">
              <button
                type="button"
                className="nav-link site-navbar__link dropdown-toggle btn border-0 bg-transparent shadow-none align-baseline"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-expanded={isDropdownOpen}
              >
                บริการ
              </button>

              <ul className={`dropdown-menu site-navbar__dropdown ${isDropdownOpen ? "show" : ""}`}>
                <li>
                  <Link href="/services/web" className="dropdown-item" onClick={handleCloseAll}>
                    นอน
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai" className="dropdown-item" onClick={handleCloseAll}>
                    นั่ง
                  </Link>
                </li>
                <li>
                  <Link href="/services/robotics" className="dropdown-item" onClick={handleCloseAll}>
                    กิน
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link href="/about" className="nav-link site-navbar__link" onClick={handleCloseAll}>
                เกี่ยวกับเรา
              </Link>
            </li>
          </ul>

          <div className="d-flex site-navbar__actions gap-2 my-2 my-lg-0">
            <Link href="/login" className="btn btn-outline-light site-navbar__login" onClick={handleCloseAll}>
              เข้าสู่ระบบ
            </Link>
            <Link href="/register" className="btn btn-primary site-navbar__register" onClick={handleCloseAll}>
              ลงชื่อเข้าใช้
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}