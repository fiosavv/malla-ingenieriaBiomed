// Script para la lógica de aprobación y desbloqueo

document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");

  // Mapa para acceder rápido a cada ramo por su id
  const mapaRamos = {};
  ramos.forEach(ramo => {
    mapaRamos[ramo.id] = ramo;
  });

  // Función para aprobar un ramo y todos los que dependen de él recursivamente
  function aprobarRamo(id) {
    const ramo = mapaRamos[id];
    if (!ramo || ramo.classList.contains("aprobado")) return;

    ramo.classList.add("aprobado");

    // Desbloquear ramos que este ramo abre
    const abre = ramo.dataset.abre;
    if (abre && abre.trim() !== "") {
      const ramosAbiertos = abre.split(",").map(r => r.trim());
      ramosAbiertos.forEach(ramoId => aprobarRamo(ramoId));
    }
  }

  // Click en ramo
  ramos.forEach(ramo => {
    ramo.addEventListener("click", () => {
      // Si ya está aprobado no hace nada
      if (ramo.classList.contains("aprobado")) return;

      aprobarRamo(ramo.id);
    });
  });
});
