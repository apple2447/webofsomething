import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";

type BlogRouteContext = {
	params: Promise<{ id: string }>;
};

function getValidId(id: string) {
	return mongoose.Types.ObjectId.isValid(id) ? id : null;
}

export async function PUT(
	request: Request,
	{ params }: BlogRouteContext,
) {
	try {
		const { id } = await params;
		const validId = getValidId(id);

		if (!validId) {
			return NextResponse.json(
				{ message: "รหัสบทความไม่ถูกต้อง" },
				{ status: 400 },
			);
		}

		await connectDB();

		const body = await request.json();
		const title = String(body.title ?? "").trim();
		const slug = String(body.slug ?? "").trim().toLowerCase();
		const content = String(body.content ?? "").trim();

		if (!title || !slug) {
			return NextResponse.json(
				{ message: "กรุณากรอกชื่อและ slug" },
				{ status: 400 },
			);
		}

		const duplicate = await Blog.findOne({
			$or: [{ title }, { slug }],
			_id: { $ne: validId },
		});

		if (duplicate) {
			return NextResponse.json(
				{ message: "ชื่อหรือ slug นี้มีอยู่แล้ว" },
				{ status: 409 },
			);
		}

		const blog = await Blog.findByIdAndUpdate(
			validId,
			{ title, slug, content },
			{ new: true, runValidators: true },
		).lean();

		if (!blog) {
			return NextResponse.json(
				{ message: "ไม่พบบทความ" },
				{ status: 404 },
			);
		}

		return NextResponse.json({ message: "แก้ไขบทความสำเร็จ", blog });
	} catch (error) {
		console.error("PUT blog error:", error);

		return NextResponse.json(
			{ message: "ไม่สามารถแก้ไขบทความได้" },
			{ status: 500 },
		);
	}
}

export async function DELETE(
	_request: Request,
	{ params }: BlogRouteContext,
) {
	try {
		const { id } = await params;
		const validId = getValidId(id);

		if (!validId) {
			return NextResponse.json(
				{ message: "รหัสบทความไม่ถูกต้อง" },
				{ status: 400 },
			);
		}

		await connectDB();

		const blog = await Blog.findByIdAndDelete(validId).lean();

		if (!blog) {
			return NextResponse.json(
				{ message: "ไม่พบบทความ" },
				{ status: 404 },
			);
		}

		return NextResponse.json({ message: "ลบบทความสำเร็จ" });
	} catch (error) {
		console.error("DELETE blog error:", error);

		return NextResponse.json(
			{ message: "ไม่สามารถลบบทความได้" },
			{ status: 500 },
		);
	}
}
