import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export default async function Dashboard() {
  const user = await getSession();
  
  if (!user) {
    redirect("/login")
  }

  return (
    <div className="auth-page">
      <form className="auth-card">  
        <h2> Dashboard </h2>
        <p>ยินดีต้อนรับ : {user.name as string}</p>
        <p>บทบาท : {user.role as string}</p>
      </form>
    </div>
  )
}