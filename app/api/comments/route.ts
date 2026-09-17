import { NextResponse } from "next/server";
import {connectDB} from "@/lib/mongodb";
import Comment from "@/modelss/Comment";

// GET: ดึง Comments ทั้งหมด
export async function GET() {
  try {
    await connectDB();

    const comments = await Comment.find()
      .populate("user", "name email")
      .populate("post", "title");

    return NextResponse.json(comments);
  } catch (error) {
    return NextResponse.json(
      { message: "ไม่สามารถดึงข้อมูล Comments ได้" },
      { status: 500 }
    );
  }
}

// POST: เพิ่ม Comment
export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    const comment = await Comment.create({
      post: body.post,
      user: body.user,
      content: body.content,
      status: "Pending",
    });

    return NextResponse.json(comment, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "ไม่สามารถสร้าง Comment ได้" },
      { status: 500 }
    );
  }
}