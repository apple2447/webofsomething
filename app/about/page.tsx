"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function About() {


  return (

    <div className="auth-page">
      <form className="auth-card">  
        <p>คนทำเว็ป</p>
        <p>เว็ปนี้ทำเป็นกลุ่มมี...</p>
        <p>กรภัทร์ กลิ่นทิพย์ขจร ทส.2/1 (TumSab)</p>
        <p>และก็ เจณสุฎาณ์ ธนะพิงค์พงษ์ ทส.2/1</p>
      </form>
    </div>
  );
}