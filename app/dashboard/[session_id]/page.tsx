import { supabase } from "@/lib/supabase"
import { notFound } from "next/navigation"

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ session_id: string }>
}) {
  const { session_id } = await params

  const { data, error } = await supabase
    .from("atlas_sessions")
    .select("*")
    .eq("id", session_id)
    .single()

  if (error || !data) {
    return notFound()
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>Session encontrada</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
