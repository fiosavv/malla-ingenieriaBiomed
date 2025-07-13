document.addEventListener("DOMContentLoaded", () => {
  // Obtener todos los ramos
  const ramos = document.querySelectorAll(".ramo");

  // Crear un mapa rápido para buscar ramos por id
  const mapaRamos = {};
  ramos.forEach(ramo => {
    mapaRamos[ramo.id] = ramo;
  });

  // Función recursiva para aprobar un ramo y los que desbloquea
  function aprobarRamo(id) {
    const ramo = mapaRamos[id];
    if (!ramo) return; // Si no existe, salir
    if (ramo.classList.contains("aprobado")) return; // Ya aprobado

    ramo.classList.add("aprobado");

    // Obtener la lista de ramos que desbloquea
    const abre = ramo.dataset.abre;
    if (abre && abre.trim() !== "") {
      const ramosAbiertos = abre.split(",").map(x => x.trim());
      ramosAbiertos.forEach(idAbierto => aprobarRamo(idAbierto));
    }
  }

  // Añadir evento click a cada ramo
  ramos.forEach(ramo => {
    ramo.addEventListener("click", () => {
      if (!ramo.classList.contains("aprobado")) {
        aprobarRamo(ramo.id);
      }
    });
  });
});
