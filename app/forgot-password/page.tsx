"use client";

import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("ระบบจะส่งลิงก์ Reset Password ไปที่ " + email);
  }

  return (
    <div className="auth-page">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h1>ลืมรหัสผ่าน?</h1>

        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button>ส่งข้อความเพื่อ Reset รหัสผ่าน</button>
      </form>
    </div>
  );
}