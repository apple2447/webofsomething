import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "บทความ",
    description: "รวมบทความและข่าวสารล่าสุด",
};

export const dynamic = "force-dynamic";

export type BlogCardData = {
    _id: string;
    title: string;
    slug: string;
    content: string;
    createdAt: string;
};

type BlogCardProps = {
    blog: BlogCardData;
};

function formatDate(date: string) {
    if (!date) {
        return "";
    }

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
        return "";
    }

    return parsedDate.toLocaleDateString("th-TH", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

export default function BlogCard({ blog }: BlogCardProps) {
    const formattedDate = formatDate(blog.createdAt);

    return (
        <article className="card">
            <div className="card-body d-flex flex-column">
                {formattedDate && (
                    <time
                        dateTime={blog.createdAt}
                        className="text-muted small"
                    >
                        {formattedDate}
                    </time>
                )}

                <h2 className="card-title fs-4 mt-2">
                    {blog.title || "ไม่มีชื่อบทความ"}
                </h2>

                {blog.slug && (
                    <p className="card-text text-success small">
                        #{blog.slug}
                    </p>
                )}

                {blog.content ? (
                    <div
                        className="card-text"
                        dangerouslySetInnerHTML={{
                            __html: blog.content,
                        }}
                    />
                ) : (
                    <p className="card-text">
                        บทความนี้ยังไม่มีรายละเอียด
                    </p>
                )}

                <Link
                    href={`/blogs/${blog._id}`}
                    className="btn btn-primary text-white mt-3 align-self-start"
                >
                    อ่านเพิ่มเติม
                </Link>
            </div>
        </article>
    );
}