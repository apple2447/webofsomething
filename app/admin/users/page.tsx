import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";

export default async function Dashboard() {
  const user = await getSession();
  
  if (!user) {
    redirect("/login")
  }
  if (user?.role !== "admin") {
    redirect("/dashboard")
  }

  return (
    <div >

      <h2> Admin </h2>
      <p>Welcome: {user.name as string} to Admin panel</p>
      <p>มันคือแอดมิน</p>
    </div>
  )
}