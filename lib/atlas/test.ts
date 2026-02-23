import { runAtlasEngine } from "./engine";

const mockResponses = {
  infraestructura_digital_actual: [3, 4, 2, 3],
  apalancamiento_de_conocimiento: [4, 4, 3, 4],
  automatizacion_operativa: [2, 3, 2, 2],
  escalabilidad_estrategica: [3, 3, 3, 4],
};

const result = runAtlasEngine(mockResponses);

console.log("ATLAS RESULT:");
console.log(result);
