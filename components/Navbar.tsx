"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        {/* Logo */}
        <Link
          href="/"
          className="navbar-brand fw-bold"
          onClick={() => setIsOpen(false)}
        >
          MyApp
        </Link>

        {/* Mobile Button */}
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
          className={`collapse navbar-collapse ${
            isOpen ? "show" : ""
          }`}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            {/* Home */}
            <li className="nav-item">
              <Link
                href="/"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>

            {/* Products */}
            <li className="nav-item">
              <Link
                href="/products"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
            </li>

            {/* Blog */}
            <li className="nav-item">
              <Link
                href="/blog"
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </button>

              <ul className="dropdown-menu">

                <li>
                  <Link
                    href="/services/web"
                    className="dropdown-item"
                    onClick={() => setIsOpen(false)}
                  >
                    Web Development
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services/ai"
                    className="dropdown-item"
                    onClick={() => setIsOpen(false)}
                  >
                    AI
                  </Link>
                </li>

                <li>
                  <Link
                    href="/services/robotics"
                    className="dropdown-item"
                    onClick={() => setIsOpen(false)}
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
                className="nav-link"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>

          </ul>

          {/* Right Menu */}
          <div className="d-flex gap-2">

            <Link
              href="/login"
              className="btn btn-outline-light"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>

            <Link
              href="/register"
              className="btn btn-primary"
              onClick={() => setIsOpen(false)}
            >
              Register
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}