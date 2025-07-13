document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");
  const mapa = {};

  ramos.forEach(r => {
    mapa[r.id] = r;
  });

  function aprobarRamo(id) {
    const ramo = mapa[id];
    if (!ramo || ramo.classList.contains("aprobado")) return;

    ramo.classList.add("aprobado");

    const abre = ramo.dataset.abre;
    if (abre) {
      abre.split(",").forEach(dep => aprobarRamo(dep.trim()));
    }
  }

  ramos.forEach(r => {
    r.addEventListener("click", () => {
      aprobarRamo(r.id);
    });
  });
});
