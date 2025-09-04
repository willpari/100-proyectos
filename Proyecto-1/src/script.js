const boton = document.getElementById("miBoton");
const titulo = document.getElementById("titulo-principal");
const parrafo = document.getElementById("texto-secundario");

// ---- Contador de clics ----
let contador = 0;

boton.addEventListener("click", () => {
    contador++; // suma 1 cada vez que haces click

    titulo.textContent = `¡Has presionado el botón! (Click nº ${contador})`;
    titulo.style.color = randomHexColorCode(); // color aleatorio

    parrafo.textContent = "Felicidades eres bienvenido";
    parrafo.style.color = randomHexColorCode(); // color aleatorio
});

// ---- Botón para modo claro/oscuro ----
const body = document.body;
const miBotonSecundario = document.getElementById('miBotonSecundario');

miBotonSecundario.addEventListener('click', () => {
   body.classList.toggle('light-mode');
});

// ---- Función para generar colores aleatorios ----
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};
