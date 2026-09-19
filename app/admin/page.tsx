import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

const adminSections = [
	{
		href: "/admin/blogs",
		title: "จัดการบทความ",
		description: "เพิ่ม แก้ไข และลบบทความ",
	},
	{
		href: "/admin/categories",
		title: "จัดการหมวดหมู่",
		description: "เพิ่มหมวดหมู่สำหรับสินค้า",
	},
	{
		href: "/admin/products",
		title: "จัดการสินค้า",
		description: "เพิ่มสินค้าและอัปโหลดรูปภาพ",
	},
];

export default async function AdminPage() {
	const user = await getSession();

	if (!user) {
		redirect("/login");
	}

	if (user.role !== "admin") {
		redirect("/");
	}

	return (
		<main className="mx-auto w-full max-w-6xl px-6 py-10">
			<h1 className="text-3xl font-bold">แผงควบคุมผู้ดูแลระบบ</h1>
			<p className="mt-2 text-gray-600">
				เลือกส่วนที่ต้องการจัดการ
			</p>

			<section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{adminSections.map((section) => (
					<Link
						key={section.href}
						href={section.href}
						className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
					>
						<h2 className="text-xl font-bold">{section.title}</h2>
						<p className="mt-2 text-gray-600">{section.description}</p>
					</Link>
				))}
			</section>
		</main>
	);
}
