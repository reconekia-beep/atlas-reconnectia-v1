// ===============================
// ATLAS v1.0 – Deterministic Engine
// ===============================

export type Dimension =
  | "infraestructura_digital"
  | "apalancamiento_conocimiento"
  | "automatizacion_operativa"
  | "escalabilidad_estrategica";

export type Responses = {
  [dimension in Dimension]: number[];
};

export type DimensionScores = {
  [dimension in Dimension]: number;
};

export type AtlasResult = {
  dimension_scores: DimensionScores;
  structural_index: number;
  profile: string;
};

function calculateDimensionAverages(responses: Responses): DimensionScores {
  const result = {} as DimensionScores;

  for (const dimension in responses) {
    const scores = responses[dimension as Dimension];
    const sum = scores.reduce((acc, val) => acc + val, 0);
    const average = sum / scores.length;
    result[dimension as Dimension] = Number(average.toFixed(1));
  }

  return result;
}

function calculateStructuralIndex(scores: DimensionScores): number {
  const values = Object.values(scores);
  const sum = values.reduce((acc, val) => acc + val, 0);
  const average = sum / values.length;
  return Number(average.toFixed(1));
}

function determineProfile(index: number): string {
  if (index < 2.5) return "Fragmentado";
  if (index < 3.5) return "En Transición";
  return "Estructurado";
}

export function runAtlasEngine(responses: Responses): AtlasResult {
  const dimension_scores = calculateDimensionAverages(responses);
  const structural_index = calculateStructuralIndex(dimension_scores);
  const profile = determineProfile(structural_index);

  return {
    dimension_scores,
    structural_index,
    profile,
  };
}
