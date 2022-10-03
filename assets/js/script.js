
function onEnviar() {
}

// BOTON SUBIR
window.addEventListener("scroll", () => {
    btnSubir.classList.toggle("mostrar", window.scrollY >= 688);
});