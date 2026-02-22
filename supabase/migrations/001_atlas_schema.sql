-- ============================================
-- ATLAS v1.0 DATABASE STRUCTURE
-- ============================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ============================================
-- 1. ATLAS SESSIONS
-- ============================================

create table if not exists atlas_sessions (
  id uuid primary key default uuid_generate_v4(),
  created_at timestamp with time zone default now(),
  status text default 'in_progress',
  structural_index numeric(3,2),
  profile text,
  projection numeric(3,2)
);

-- ============================================
-- 2. ATLAS ANSWERS
-- ============================================

create table if not exists atlas_answers (
  id uuid primary key default uuid_generate_v4(),
  session_id uuid references atlas_sessions(id) on delete cascade,
  dimension text not null,
  question_id text not null,
  score integer not null check (score between 1 and 5),
  created_at timestamp with time zone default now()
);

-- ============================================
-- 3. ATLAS RESULTS
-- ============================================

create table if not exists atlas_results (
  id uuid primary key default uuid_generate_v4(),
  session_id uuid unique references atlas_sessions(id) on delete cascade,
  infraestructura_digital_actual numeric(3,2),
  apalancamiento_de_conocimiento numeric(3,2),
  automatizacion_operativa numeric(3,2),
  escalabilidad_estrategica numeric(3,2),
  structural_index numeric(3,2),
  profile text,
  projection numeric(3,2),
  created_at timestamp with time zone default now()
);

-- ============================================
-- ENABLE ROW LEVEL SECURITY
-- ============================================

alter table atlas_sessions enable row level security;
alter table atlas_answers enable row level security;
alter table atlas_results enable row level security;

create policy "Allow all for now - sessions"
on atlas_sessions
for all
using (true)
with check (true);

create policy "Allow all for now - answers"
on atlas_answers
for all
using (true)
with check (true);

create policy "Allow all for now - results"
on atlas_results
for all
using (true)
with check (true);

-- ============================================
-- ATLAS CALCULATION ENGINE
-- ============================================

create or replace function calculate_atlas_results(session_uuid uuid)
returns void as $$
declare
    infra numeric(3,2);
    conocimiento numeric(3,2);
    automatizacion numeric(3,2);
    escalabilidad numeric(3,2);
    structural numeric(3,2);
    profile_result text;
begin

    select round(avg(score)::numeric, 2)
    into infra
    from atlas_answers
    where session_id = session_uuid
      and dimension = 'infraestructura_digital_actual';

    select round(avg(score)::numeric, 2)
    into conocimiento
    from atlas_answers
    where session_id = session_uuid
      and dimension = 'apalancamiento_de_conocimiento';

    select round(avg(score)::numeric, 2)
    into automatizacion
    from atlas_answers
    where session_id = session_uuid
      and dimension = 'automatizacion_operativa';

    select round(avg(score)::numeric, 2)
    into escalabilidad
    from atlas_answers
    where session_id = session_uuid
      and dimension = 'escalabilidad_estrategica';

    structural := round((
        coalesce(infra,0) +
        coalesce(conocimiento,0) +
        coalesce(automatizacion,0) +
        coalesce(escalabilidad,0)
    ) / 4, 2);

    if structural < 2.5 then
        profile_result := 'Reactive';
    elsif structural < 3.5 then
        profile_result := 'Structured';
    else
        profile_result := 'Exponential';
    end if;

    insert into atlas_results (
        session_id,
        infraestructura_digital_actual,
        apalancamiento_de_conocimiento,
        automatizacion_operativa,
        escalabilidad_estrategica,
        structural_index,
        profile,
        projection
    )
    values (
        session_uuid,
        infra,
        conocimiento,
        automatizacion,
        escalabilidad,
        structural,
        profile_result,
        structural + 0.5
    );

    update atlas_sessions
    set status = 'completed',
        structural_index = structural,
        profile = profile_result,
        projection = structural + 0.5
    where id = session_uuid;

end;
$$ language plpgsql;
