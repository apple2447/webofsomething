"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Contact() {


  return (

    <div className="auth-page">
      <form className="auth-card">  
        <h1>Contact📞</h1>
        <p>ติดต่อได้ที่ ตามเว็ปได้เลย</p>
        <p>---------------------------------------------------</p>
        <>ลิงค์/เว็ปไซต์เพิ่มเติม</>
        <p>
          Github(Sabweb_Project) <Link href="https://github.com/apple2447/Sabweb_Project1">Link here</Link>
        </p>
        <p>
          Github(My Profile) <Link href="https://github.com/apple2447">Github</Link>
        </p>
        <p>
          Website(Sabweb_Project) <Link href="https://sabweb-project1.vercel.app/">Link here</Link>
        </p>
        <p>----------------------------------------------------</p>
      </form>
    </div>
  );
}