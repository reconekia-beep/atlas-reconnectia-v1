import { supabase } from '@/lib/supabase'

export default async function Home() {
  const { data, error } = await supabase
    .from('atlas_results')
    .select('*')
    .limit(1)

  return (
    <main style={{ padding: 40 }}>
      <h1>Test Supabase Connection</h1>
      <pre>{JSON.stringify({ data, error }, null, 2)}</pre>
    </main>
  )
}
