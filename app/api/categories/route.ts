import { NextResponse } from "next/server";
import {connectDB} from "@/lib/mongodb";
import Category from "@/modelss/Category";

// GET: ดึง Categories ทั้งหมด
export async function GET() {
  try {
    await connectDB();

    const categories = await Category.find();

    return NextResponse.json(categories);
  } catch (error) {
    return NextResponse.json(
      { message: "ไม่สามารถดึงข้อมูล Categories ได้" },
      { status: 500 }
    );
  }
}

// POST: เพิ่ม Category
export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();

    const category = await Category.create(body);

    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "ไม่สามารถสร้าง Category ได้" },
      { status: 500 }
    );
  }
}