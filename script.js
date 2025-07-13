document.addEventListener("DOMContentLoaded", () => {
  const ramos = {
    "Cálculo I": { requisitos: [], semestre: 1, desbloquea: ["Cálculo II", "Fundamentos de economía para ingeniería"] },
    "Álgebra I": { requisitos: [], semestre: 1, desbloquea: ["Álgebra II"] },
    "Física I": { requisitos: [], semestre: 1, desbloquea: ["Física II"] },
    "Introducción al diseño en ingeniería": { requisitos: [], semestre: 1, desbloquea: ["Fundamentos de programación para ingeniería"] },
    "Introducción a la ingeniería biomédica": { requisitos: [], semestre: 1, desbloquea: [] },
    "Cálculo II": { requisitos: ["Cálculo I"], semestre: 2, desbloquea: [] },
    "Álgebra II": { requisitos: ["Álgebra I"], semestre: 2, desbloquea: [] },
    "Física II": { requisitos: ["Física I"], semestre: 2, desbloquea: [] },
    "Fundamentos de programación para ingeniería": { requisitos: ["Introducción al diseño en ingeniería"], semestre: 2, desbloquea: [] },
    "Biología Celular": { requisitos: [], semestre: 2, desbloquea: [] }
  };

  const estado = {};
  Object.entries(ramos).forEach(([nombre, datos]) => {
    const div = document.createElement("div");
    div.className = "ramo bloqueado";
    div.textContent = nombre;
    div.dataset.nombre = nombre;

    const columna = document.getElementById(`semestre-${datos.semestre}`);
    if (columna) columna.appendChild(div);

    estado[nombre] = {
      aprobado: false,
      div: div
    };

    if (datos.requisitos.length === 0) desbloquear(nombre);
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

      const desbloquea = ramos[nombre].desbloquea || [];
      desbloquea.forEach(dest => {
        const requisitos = ramos[dest]?.requisitos || [];
        const aprobados = requisitos.every(req => estado[req]?.aprobado);
        if (aprobados) desbloquear(dest);
      });
    }
  }
});
