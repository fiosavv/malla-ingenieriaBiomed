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
  "Biología Celular": { requisitos: [], semestre: 2, desbloquea: ["Biología Molecular", "Fisiología"] },

  "Inglés I": { requisitos: [], semestre: 3, desbloquea: ["Inglés II"] },
  "Cálculo III": { requisitos: ["Cálculo II"], semestre: 3, desbloquea: [] },
  "Electricidad y magnetismo para ingeniería": { requisitos: ["Cálculo II", "Física II"], semestre: 3, desbloquea: ["Redes eléctricas interdisciplinaria", "Biomateriales"] },
  "Fundamentos de economía para ingeniería": { requisitos: ["Cálculo I"], semestre: 3, desbloquea: ["Taller de diseño en ingeniería", "Ingeniería económica interdisciplinaria"] },
  "Análisis estadístico para ingeniería": { requisitos: ["Cálculo II", "Física II"], semestre: 3, desbloquea: ["Bioestadísticas", "Procesamiento de señales biológicas"] },
  "Biología Molecular": { requisitos: ["Biología Celular"], semestre: 3, desbloquea: ["Bioinformática"] },

  "Inglés II": { requisitos: ["Inglés I"], semestre: 4, desbloquea: ["Inglés III"] },
  "Taller de diseño en ingeniería": { requisitos: ["Fundamentos de economía para ingeniería"], semestre: 4, desbloquea: [] },
  "Métodos de programación interdisciplinaria": { requisitos: ["Fundamentos de programación para ingeniería"], semestre: 4, desbloquea: ["Análisis de algoritmos y estructura de datos interdisciplinaria"] },
  "Ingeniería económica interdisciplinaria": { requisitos: ["Fundamentos de economía para ingeniería"], semestre: 4, desbloquea: ["Evaluación de proyectos"] },
  "Fisiología": { requisitos: ["Biología Celular"], semestre: 4, desbloquea: ["Bioética", "Fisiología II"] },
  "Ecuaciones diferenciales y métodos numéricos para biomédica": { requisitos: ["Cálculo II", "Álgebra II"], semestre: 4, desbloquea: ["Redes eléctricas interdisciplinaria"] },

  "Inglés III": { requisitos: ["Inglés II"], semestre: 5, desbloquea: ["Inglés IV"] },
  "Bioestadísticas": { requisitos: ["Análisis estadístico para ingeniería"], semestre: 5, desbloquea: ["Electivo I"] },
  "Bioética": { requisitos: ["Fisiología"], semestre: 5, desbloquea: [] },
  "Redes eléctricas interdisciplinaria": { requisitos: ["Electricidad y magnetismo para ingeniería", "Ecuaciones diferenciales y métodos numéricos para biomédica"], semestre: 5, desbloquea: ["Sistemas electrónicos interdisciplinaria", "Control de sistemas", "Sistemas digitales y microcontroladores"] },
  "Fisiología II": { requisitos: ["Fisiología"], semestre: 5, desbloquea: ["Electromedicina", "Biomecánica", "Mediciones fisiológicas y bioseguridad"] },
  "Análisis de algoritmos y estructura de datos interdisciplinaria": { requisitos: ["Métodos de programación interdisciplinaria"], semestre: 5, desbloquea: ["Ingeniería de software interdisciplinaria", "Bioinformática"] },

  "Inglés IV": { requisitos: ["Inglés III"], semestre: 6, desbloquea: [] },
  "Procesamiento de señales biológicas": { requisitos: ["Análisis estadístico para ingeniería"], semestre: 6, desbloquea: ["Tópico de especialidad I", "Tópico de especialidad II"] },
  "Biomateriales": { requisitos: ["Electricidad y magnetismo para ingeniería"], semestre: 6, desbloquea: ["Biomecánica"] },
  "Sistemas electrónicos interdisciplinaria": { requisitos: ["Redes eléctricas interdisciplinaria"], semestre: 6, desbloquea: ["Electromedicina", "Mediciones fisiológicas y bioseguridad"] },
  "Control de sistemas": { requisitos: ["Redes eléctricas interdisciplinaria"], semestre: 6, desbloquea: [] },
  "Ingeniería de software interdisciplinaria": { requisitos: ["Análisis de algoritmos y estructura de datos interdisciplinaria"], semestre: 6, desbloquea: ["Informática en salud"] },

  "Electromedicina": { requisitos: ["Fisiología II", "Sistemas electrónicos interdisciplinaria"], semestre: 7, desbloquea: ["Bioinstrumentación", "Tópico de especialidad II"] },
  "Biomecánica": { requisitos: ["Fisiología II", "Biomateriales"], semestre: 7, desbloquea: ["Tópico de especialidad II", "Tópico de especialidad III", "Electivo I", "Tópico de especialidad IV", "Tópico de especialidad V"] },
  "Sistemas digitales y microcontroladores": { requisitos: ["Redes eléctricas interdisciplinaria"], semestre: 7, desbloquea: [] },
  "Mediciones fisiológicas y bioseguridad": { requisitos: ["Fisiología II", "Sistemas electrónicos interdisciplinaria"], semestre: 7, desbloquea: ["Ingeniería clínica"] },
  "Evaluación de proyectos": { requisitos: ["Ingeniería económica interdisciplinaria"], semestre: 7, desbloquea: ["Ingeniería clínica", "Bioinstrumentación", "Análisis de sistemas de salud"] },

  "Ingeniería clínica": { requisitos: ["Mediciones fisiológicas y bioseguridad", "Evaluación de proyectos"], semestre: 8, desbloquea: ["Gestión de operaciones en salud", "Tópico de especialidad III", "Electivo I"] },
  "Bioinstrumentación": { requisitos: ["Electromedicina", "Evaluación de proyectos"], semestre: 8, desbloquea: ["Tópico de especialidad II", "Tópico de especialidad III", "Electivo I", "Tópico de especialidad V"] },
  "Informática en salud": { requisitos: ["Ingeniería de software interdisciplinaria"], semestre: 8, desbloquea: ["Tópico de especialidad I", "Tópico de especialidad II", "Tópico de especialidad III", "Electivo I", "Tópico de especialidad V", "Tópico de especialidad VI"] },
  "Bioinformática": { requisitos: ["Análisis de algoritmos y estructura de datos interdisciplinaria", "Biología Molecular"], semestre: 8, desbloquea: ["Tópico de especialidad V"] },
  "Análisis de sistemas de salud": { requisitos: ["Evaluación de proyectos"], semestre: 8, desbloquea: [] },

  "Gestión de operaciones en salud": { requisitos: ["Ingeniería clínica"], semestre: 9, desbloquea: ["Tópico de especialidad IV", "Tópico de especialidad V"] },
  "Tópico de especialidad I": { requisitos: ["Procesamiento de señales biológicas", "Informática en salud"], semestre: 9, desbloquea: ["Tópico de especialidad IV"] },
  "Tópico de especialidad II": { requisitos: ["Procesamiento de señales biológicas"], semestre: 9, desbloquea: [] },
  "Tópico de especialidad III": { requisitos: ["Ingeniería clínica", "Bioinstrumentación", "Informática en salud"], semestre: 9, desbloquea: [] },
  "Electivo I": { requisitos: ["Bioestadísticas", "Biomecánica", "Bioinstrumentación", "Ingeniería clínica", "Informática en salud"], semestre: 9, desbloquea: ["Desarrollo e innovación en ingeniería biomédica", "Electivo II"] },

  "Tópico de especialidad IV": { requisitos: ["Tópico de especialidad I", "Gestión de operaciones en salud"], semestre: 10, desbloquea: [] },
  "Tópico de especialidad V": { requisitos: ["Biomecánica", "Bioinstrumentación", "Informática en salud", "Gestión de operaciones en salud", "Electivo I", "Bioinformática"], semestre: 10, desbloquea: [] },
  "Tópico de especialidad VI": { requisitos: ["Informática en salud"], semestre: 10, desbloquea: [] },
  "Desarrollo e innovación en ingeniería biomédica": { requisitos: ["Electivo I"], semestre: 10, desbloquea: [] },
  "Electivo II": { requisitos: ["Electivo I"], semestre: 10, desbloquea: ["Trabajo de Titulación"] },

  "Trabajo de Titulación": { requisitos: ["Electivo II"], semestre: 11, desbloquea: [] }
};

// === Generación e interacción ===

const estado = {};
const mallaDiv = document.querySelector(".malla");

Object.entries(ramos).forEach(([nombre, data]) => {
  const div = document.createElement("div");
  div.className = "ramo bloqueado";
  div.textContent = nombre;
  div.dataset.nombre = nombre;

  const columna = document.getElementById(`semestre-${data.semestre}`);
  columna.appendChild(div);

  estado[nombre] = {
    aprobado: false,
    div: div
  };

  const requisitos = data.requisitos || [];
  if (requisitos.length === 0) desbloquear(nombre);
});

function desbloquear(nombre) {
  const ramo = estado[nombre];
  ramo.div.classList.remove("bloqueado");
  ramo.div.addEventListener("click", () => aprobar(nombre));
}

function aprobar(nombre) {
  const ramo = estado[nombre];
  if (!ramo.aprobado) {
    ramo.aprobado = true;
    ramo.div.classList.add("aprobado");

    (ramos[nombre].desbloquea || []).forEach(dest => {
      const requisitos = ramos[dest].requisitos || [];
      const aprobados = requisitos.every(req => estado[req]?.aprobado);
      if (aprobados) desbloquear(dest);
    });
  }
}
