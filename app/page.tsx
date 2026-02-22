import { createClient } from "@supabase/supabase-js"
import { notFound } from "next/navigation"

export default async function Dashboard({
  params,
}: {
  params: { session_id: string }
}) {
  const { session_id } = params

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { data, error } = await supabase
    .from("atlas_sessions")
    .select("*")
    .eq("id", session_id)
    .single()

  if (error || !data) {
    console.log("Supabase error:", error)
    return notFound()
  }

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>ATLAS Diagnostic Report</h1>

      <hr style={{ margin: "20px 0" }} />

      <h2>Cliente</h2>
      <p><strong>Nombre:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Website:</strong> {data.website}</p>

      <hr style={{ margin: "20px 0" }} />

      <h2>Resultados</h2>
      <p><strong>Structural Index:</strong> {data.structural_index}</p>
      <p><strong>Perfil:</strong> {data.profile}</p>

      <hr style={{ margin: "20px 0" }} />

      <h2>Scores por Dimensión</h2>
      <pre
        style={{
          background: "#f5f5f5",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        {JSON.stringify(data.dimension_scores, null, 2)}
      </pre>
    </div>
  )
}
