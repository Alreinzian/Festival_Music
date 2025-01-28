document.addEventListener("DOMContentLoaded", function () {
  navigateFix();
  crearGaleria();
  resaltarEnlace();
  scrollNav();
});

function navigateFix() {
  const header = document.querySelector(".header");
  const sobreFestival = document.querySelector(".sobre-festival");

  document.addEventListener("scroll", function () {
    if (sobreFestival.getBoundingClientRect().bottom < 1) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });
}
function crearGaleria() {
  const cantImg = 16;
  const galeria = document.querySelector(".galeria-imagenes");

  for (let i = 1; i <= cantImg; i++) {
    const imagen = document.createElement("IMG");
    imagen.src = `src/img/gallery/full/${i}.jpg`;
    imagen.alt = "Imagen Galeria";
    galeria.appendChild(imagen);

    //Event Handler es un evento que responde a una acción
    imagen.onclick = function () {
      mostrarImagen(i);
    };
    galeria.appendChild(imagen);
  }
}
function mostrarImagen(i) {
  const imagen = document.createElement("IMG");
  imagen.src = `src/img/gallery/full/${i}.jpg`;
  imagen.alt = "Imagen Galeria";
  galeria.appendChild(imagen);
  //Generar modal
  const modal = document.createElement("DIV");
  modal.classList.add("modal");
  modal.onclick = cerrarModal;

  //Butón cerrar modal

  const cerrarModalBtn = document.createElement("BUTTON");
  cerrarModalBtn.textContent = "X";
  cerrarModalBtn.classList.add("btn-cerrar");
  cerrarModalBtn.onclick = cerrarModal;

  modal.appendChild(cerrarModalBtn);
  modal.appendChild(imagen);

  //Agregar al HTML
  const body = document.querySelector("body");
  body.classList.add("overflow-hidden");
  body.appendChild(modal);
}
function cerrarModal() {
  const modal = document.querySelector(".modal");
  modal.classList.add("fade-out");

  setTimeout(() => {
    modal?.remove();
    const body = document.querySelector("body");
    body.classList.remove("overflow-hidden");
  }, 500);
}
function resaltarEnlace() {
  document.addEventListener("scroll", function () {
    const section = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navegacion-principal a");

    let actual = "";
    section.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeigth = section.clientHeight;

      if (window.scrollY >= sectionTop - sectionHeigth / 3) {
        actual = section.id;
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + actual) {
        link.classList.add("active");
      }
    });
  });
}
function scrollNav() {
  const navLinks = document.querySelectorAll(".navegacion-principal a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionScroll = e.target.getAttribute("href");
      const section = document.querySelector(sectionScroll);
      section.scrollIntoView({ behavior: "smooth" });
    });
  });
}
