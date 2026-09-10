"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Register() {


  return (

    <div className="auth-page">
      <form className="auth-card">  
        <p>เกี่ยวกับฉัน</p>
        <p>ของ กรภัทร์ กลิ่นทิพย์ขจร</p>
        <>ลิงค์เพิ่มเติม</>
        <p>
          เข้าไปยัง Github ของผม? <Link href="https://github.com/apple2447">Github</Link>
        </p>
      </form>
    </div>
  );
}