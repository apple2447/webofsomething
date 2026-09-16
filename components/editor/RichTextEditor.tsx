"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill-new/dist/quill.snow.css";

const ReactQuill = dynamic(
  () => import("react-quill-new"),
  { ssr: false }
);

export default function RichTextEditor() {
  const [content, setContent] = useState("");

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        placeholder="เขียนเนื้อหาบทความ..."
      />
    </div>
  );
}