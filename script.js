const ramos = {
  "Cálculo I": { requisitos: [], semestre: 1, desbloquea: ["Cálculo II", "Fundamentos de economía para ingeniería"] },
  "Álgebra I": { requisitos: [], semestre: 1, desbloquea: ["Álgebra II"] },
  "Física I": { requisitos: [], semestre: 1, desbloquea: ["Física II"] },
  "Introducción al diseño en ingeniería": { requisitos: [], semestre: 1, desbloquea: ["Fundamentos de programación para ingeniería"] },
  "Introducción a la ingeniería biomédica": { requisitos: [], semestre: 1, desbloquea: [] },
  "Cálculo II": { requisitos: ["Cálculo I"], semestre: 2, desbloquea: ["Cálculo III", "Electricidad y magnetismo para ingeniería", "Análisis estadístico para ingeniería", "Ecuaciones diferenciales y métodos numéricos para biomédica"] },
  "Álgebra II": { requisitos: ["Álgebra I"], semestre: 2, desbloquea: ["Ecuaciones diferenciales y métodos numéricos para biomédica"] },
  "Física II": { requisitos: ["Física I"], semestre: 2, desbloquea: ["Electricidad y magnetismo para ingeniería", "Análisis estadístico para ingeniería"] },
  "Fundamentos de programación para ingeniería": { requisitos: ["Introducción al diseño en ingeniería"], semestre: 2, desbloquea: ["Métodos de programación interdisciplinaria"] },
  "Biología Celular": { requisitos: [], semestre: 2, desbloquea: ["Biología Molecular", "Fisiología"] }
};

const estado = {};
const mallaDiv = document.querySelector(".malla");

Object.entries(ramos).forEach(([nombre, data]) => {
  const div = document.createElem
