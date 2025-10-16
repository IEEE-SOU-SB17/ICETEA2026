import { SiteNavbar } from "@/components/site-navbar"
import { SiteFooter } from "@/components/site-footer"
import { getSupabaseServer } from "@/lib/supabase/server"
import Link from "next/link"
import { redirect } from "next/navigation"
import AdminLogoutButton from "./AdminLogoutButton";

async function requireAdmin() {
  const supabase = getSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) redirect("/auth/login")
  // Check profile role
  const { data: profile } = await supabase.from("profiles").select("role").eq("id", user.id).single()
  if (profile?.role !== "admin") redirect("/")
}

export default async function AdminHome() {
  await requireAdmin()
    return (
      <main className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-6">Admin Page</h1>
        <div className="flex gap-4">
          <Link href="/auth/login">
            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Login</button>
          </Link>
          <AdminLogoutButton />
        </div>
      </main>
    )
}