const ramos = {
  "Cálculo I": ["Cálculo II", "Fundamentos de economía para ingeniería"],
  "Álgebra I": ["Álgebra II"],
  "Física I": ["Física II"],
  "Introducción al diseño en ingeniería": ["Fundamentos de programación para ingeniería"],
  "Introducción a la ingeniería biomédica": [],
  "Cálculo II": ["Cálculo III", "Electricidad y magnetismo para ingeniería", "Análisis estadístico para ingeniería", "Ecuaciones diferenciales y métodos numéricos para biomédica"],
  "Álgebra II": ["Ecuaciones diferenciales y métodos numéricos para biomédica"],
  "Física II": ["Electricidad y magnetismo para ingeniería", "Análisis estadístico para ingeniería"],
  "Fundamentos de programación para ingeniería": ["Métodos de programación interdisciplinaria"],
  "Biología Celular": ["Biología Molecular", "Fisiología"],

  "Inglés I": ["Inglés II"],
  "Cálculo III": [],
  "Electricidad y magnetismo para ingeniería": ["Redes eléctricas interdisciplinaria", "Biomateriales"],
  "Fundamentos de economía para ingeniería": ["Taller de diseño en ingeniería", "Ingeniería económica interdisciplinaria"],
  "Análisis estadístico para ingeniería": ["Bioestadísticas", "Procesamiento de señales biológicas"],
  "Biología Molecular": ["Bioinformática"],

  "Inglés II": ["Inglés III"],
  "Taller de diseño en ingeniería": [],
  "Métodos de programación interdisciplinaria": ["Análisis de algoritmos y estructura de datos interdisciplinaria"],
  "Ingeniería económica interdisciplinaria": ["Evaluación de proyectos"],
  "Fisiología": ["Bioética", "Fisiología II"],
  "Ecuaciones diferenciales y métodos numéricos para biomédica": ["Redes eléctricas interdisciplinaria"],

  "Inglés III": ["Inglés IV"],
  "Bioestadísticas": ["Electivo I"],
  "Bioética": [],
  "Redes eléctricas interdisciplinaria": ["Sistemas electrónicos interdisciplinaria", "Control de sistemas", "Sistemas digitales y microcontroladores"],
  "Fisiología II": ["Electromedicina", "Biomecánica", "Mediciones fisiológicas y bioseguridad"],
  "Análisis de algoritmos y estructura de datos interdisciplinaria": ["Ingeniería de software interdisciplinaria", "Bioinformática"],

  "Inglés IV": [],
  "Procesamiento de señales biológicas": ["Tópico de especialidad I", "Tópico de especialidad II"],
  "Biomateriales": ["Biomecánica"],
  "Sistemas electrónicos interdisciplinaria": ["Electromedicina", "Mediciones fisiológicas y bioseguridad"],
  "Control de sistemas": [],
  "Ingeniería de software interdisciplinaria": ["Informática en salud"],

  "Electromedicina": ["Bioinstrumentación", "Tópico de especialidad II"],
  "Biomecánica": ["Tópico de especialidad II", "Tópico de especialidad III", "Electivo I", "Tópico de especialidad IV", "Tópico de especialidad V"],
  "Sistemas digitales y microcontroladores": [],
  "Mediciones fisiológicas y bioseguridad": ["Ingeniería clínica"],
  "Evaluación de proyectos": ["Ingeniería clínica", "Bioinstrumentación", "Análisis de sistemas de salud"],

  "Ingeniería clínica": ["Gestión de operaciones en salud", "Tópico de especialidad III", "Electivo I"],
  "Bioinstrumentación": ["Tópico de especialidad II", "Tópico de especialidad III", "Electivo I", "Tópico de especialidad V"],
  "Informática en salud": ["Tópico de especialidad I", "Tópico de especialidad II", "Tópico de especialidad III", "Electivo I", "Tópico de especialidad V", "Tópico de especialidad VI"],
  "Bioinformática": ["Tópico de especialidad V"],
  "Análisis de sistemas de salud": [],

  "Gestión de operaciones en salud": ["Tópico de especialidad IV", "Tópico de especialidad V"],
  "Tópico de especialidad I": ["Tópico de especialidad IV"],
  "Tópico de especialidad II": [],
  "Tópico de especialidad III": [],
  "Electivo I": ["Desarrollo e innovación en ingeniería biomédica", "Electivo II"],

  "Tópico de especialidad IV": [],
  "Tópico de especialidad V": [],
  "Tópico de especialidad VI": [],
  "Desarrollo e innovación en ingeniería biomédica": [],
  "Electivo II": ["Trabajo de Titulación"],

  "Trabajo de Titulación": []
};

const estado = {};
const mallaDiv = document.getElementById("malla");

Object.keys(ramos).forEach(nombre => {
  const div = document.createElement("div");
  div.className = "ramo bloqueado";
  div.textContent = nombre;
  div.dataset.nombre = nombre;
  mallaDiv.appendChild(div);
  estado[nombre] = { aprobado: false, div: div, desbloqueado: false };
});

function desbloquear(nombre) {
  const ramo = estado[nombre];
  if (!ramo.aprobado && !ramo.desbloqueado) {
    ramo.div.classList.remove("bloqueado");
    ramo.div.addEventListener("click", () => aprobar(nombre));
    ramo.desbloqueado = true;
  }
}

function aprobar(nombre) {
  const ramo = estado[nombre];
  if (!ramo.aprobado) {
    ramo.aprobado = true;
    ramo.div.classList.add("aprobado");
    ramos[nombre].forEach(destino => desbloquear(destino));
  }
}

// Desbloquear ramos iniciales (sin prerrequisitos)
[
  "Cálculo I", "Álgebra I", "Física I", 
  "Introducción al diseño en ingeniería", 
  "Introducción a la ingeniería biomédica", 
  "Biología Celular", "Inglés I"
].forEach(nombre => desbloquear(nombre));
