"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type User = {
  name: string;
  email: string;
  role: "admin" | "user";
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAdminDropdownOpen, setIsAdminDropdownOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const router = useRouter();

  useEffect(() => {
    async function loadUser() {
      try {
        const res = await fetch("/api/auth/me");
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        setUser(null);
      }
    }

    loadUser();
  }, []);

  const handleCloseAll = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    setIsAdminDropdownOpen(false);
    setIsUserDropdownOpen(false);
  };

  const handleLogout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
    });

    setUser(null);
    handleCloseAll();
    router.push("/login");
    router.refresh();
  };

  return (
    <nav className="navbar site-navbar navbar-expand-lg border-bottom border-body fixed-top z-3" data-bs-theme="dark">
      <div className="container">
        <Link href="/" className="navbar-brand site-navbar__brand" onClick={handleCloseAll}>
          🍔 งานกลุ่มวุ่นวาย
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
                🏠 หน้าแรก
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/products" className="nav-link site-navbar__link" onClick={handleCloseAll}>
                🛍️ สินค้า
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blogs" className="nav-link site-navbar__link" onClick={handleCloseAll}>
                📰 ข่าวสารอัปเดต
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/about" className="nav-link site-navbar__link" onClick={handleCloseAll}>
                📕 คนทำเว็ป
              </Link>
            </li>

            

            {/* เมนูเฉพาะ Admin */}
            {user?.role === "admin" && (
              <li className="nav-item dropdown">
                <button
                  type="button"
                  className="nav-link site-navbar__link dropdown-toggle btn border-0 bg-transparent shadow-none align-baseline text-warning"
                  onClick={() => setIsAdminDropdownOpen(!isAdminDropdownOpen)}
                  aria-expanded={isAdminDropdownOpen}
                >
                  admin
                </button>

                <ul className={`dropdown-menu site-navbar__dropdown ${isAdminDropdownOpen ? "show" : ""}`}>
                  <li>
                    <Link href="/admin/blogs" className="dropdown-item" onClick={handleCloseAll}>
                      ➕ เพิ่มบทความ
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/categories" className="dropdown-item" onClick={handleCloseAll}>
                      ➕ เพิ่มหมวดหมู่
                    </Link>
                  </li>
                  <li>
                    <Link href="/admin/products" className="dropdown-item" onClick={handleCloseAll}>
                      ➕ เพิ่มสินค้า
                    </Link>
                  </li>
                </ul>
              </li>
            )}
          </ul>

          {/* ส่วนจัดการปุ่ม Auth ด้านขวา */}
          <div className="d-flex site-navbar__actions gap-2 my-2 my-lg-0 align-items-center">
            {user ? (
              <>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-outline-light dropdown-toggle"
                    onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                    aria-expanded={isUserDropdownOpen}
                  >
                    👤 {user.name}
                  </button>

                  <ul className={`dropdown-menu site-navbar__dropdown ${isUserDropdownOpen ? "show" : ""}`}>
                    <li>
                      <Link href="/dashboard" className="dropdown-item" onClick={handleCloseAll}>
                        dashboard
                      </Link>
                    </li>
                  </ul>
                </div>
                <button type="button" className="btn btn-danger btn-logout" onClick={handleLogout}>
                  ออกจากระบบ
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="btn btn-outline-light site-navbar__login" onClick={handleCloseAll}>
                  เข้าสู่ระบบ
                </Link>
                <Link href="/register" className="btn btn-primary site-navbar__register" onClick={handleCloseAll}>
                  ลงทะเบียน
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}