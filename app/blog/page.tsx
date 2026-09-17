import Link from "next/link";

const blogs = [
  {
    title: "Next.js คืออะไร?",
    slug: "what-is-nextjs",
    description: "ทำความรู้จักกับ Next.js เบื้องต้น",
  },
  {
    title: "MongoDB คืออะไร?",
    slug: "what-is-mongodb",
    description: "ทำความรู้จักกับ MongoDB ฐานข้อมูลแบบ NoSQL",
  },
  {
    title: "การสร้างเว็บไซต์ Blog",
    slug: "create-blog",
    description: "ตัวอย่างการสร้างเว็บไซต์ Blog ด้วย Next.js",
  },
];

export default function BlogPage() {
  return (
    <main className="container py-5">
      <h1 className="mb-4">Blog</h1>

      <div className="row">
        {blogs.map((blog) => (
          <div className="col-md-4 mb-4" key={blog.slug}>
            <div className="card h-100">
              <div className="card-body">
                <h2 className="card-title fs-4">
                  {blog.title}
                </h2>

                <p className="card-text">
                  {blog.description}
                </p>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="btn btn-primary"
                >
                  อ่านเพิ่มเติม
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}