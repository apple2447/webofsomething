import { NextResponse } from "next/server";
import {connectDB} from "@/lib/mongodb";
import Post from "@/modelss/Post";

// GET: ดึง Posts ทั้งหมด
export async function GET() {
  try {
    await connectDB();

    const posts = await Post.find()
      .populate("author", "name email")
      .populate("category", "name");

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { message: "ไม่สามารถดึงข้อมูล Posts ได้" },
      { status: 500 }
    );
  }
}

// POST: เพิ่ม Post
export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    const post = await Post.create(body);

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "ไม่สามารถสร้าง Post ได้" },
      { status: 500 }
    );
  }
}