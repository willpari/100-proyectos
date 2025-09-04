const boton = document.getElementById("miBoton")
const titulo = document.getElementById("titulo-principal")
const parrafo = document.getElementById("texto-secundario")

boton.addEventListener("click", () => {

    titulo.textContent = "¡Has presionado el botón!"

    titulo.style.color = "#39FF14"

    parrafo.textContent = "Felicidades eres bienvenido"

    parrafo.style.color = "#FF00FF"
})