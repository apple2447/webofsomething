import type { Metadata } from "next";
import { connectDB } from "@/lib/mongodb";
import blogs from "@/models/Blog";
import BlogCard, {
  type BlogCardData,
} from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "บทความ",
  description: "รวมบทความและข่าวสารล่าสุด",
};

export const dynamic = "force-dynamic";

export default async function blogsPage() {
  await connectDB();

  const blog = await blogs.find()
    .sort({ createdAt: -1 })
    .lean();

  const serializedblogs: BlogCardData[] = blog.map((blogs) => ({
    _id: blogs._id.toString(),
    title: String(blogs.title ?? ""),
    slug: String(blogs.slug ?? ""),
    content: String(blogs.content ?? ""),
    createdAt: blogs.createdAt
      ? new Date(blogs.createdAt).toISOString()
      : "",
  }));

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-10">
      <h1 className="mb-8 text-3xl font-bold">
        บทความทั้งหมด
      </h1>

      {serializedblogs.length === 0 ? (
        <p className="text-gray-500">
          ยังไม่มีบทความ
        </p>
      ) : (
        <section
          aria-label="รายการบทความ"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {serializedblogs.map((blog) => (
            <BlogCard
              key={blog._id}
              blog={blog}
            />
          ))}
        </section>
      )}
    </main>
  );
}