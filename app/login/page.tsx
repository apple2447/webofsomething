"use client";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) {
      // อันนี้ที่แก้โค้ด มันรีหน้าให้ ตอนเข้า dashboard
      window.location.href = "/dashboard";
    } else {
      alert("Login มีการผิดพลาด");
    }
  }

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2 className="font-bold"> เข้าสู่ระบบ</h2>
        <input
          placeholder="Email"
          type="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        
        <p>
          <Link href="/forgot-password">Forgot Password?</Link>
        </p>

        <p>
          No account? <Link href="/register">Register</Link>
        </p>
        <button>Login</button>
      </form>
    </div>
  );
}