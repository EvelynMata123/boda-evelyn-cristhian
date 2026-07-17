// Seleccionamos el botón con el ID correcto que tienes en el HTML
const boton = document.getElementById("verInvitacion");

boton.addEventListener("click", () => {
    // Seleccionamos la siguiente sección a la que queremos ir (Nuestra Historia)
    const siguienteSeccion = document.querySelector(".noticia");
    
    // Hacemos que la pantalla se deslice suavemente hacia esa sección
    siguienteSeccion.scrollIntoView({ behavior: "smooth" });
});

// =========================
// REPRODUCTOR DE MÚSICA
// =========================
const audio = document.getElementById("musicaFondo");
const btnMusica = document.getElementById("btnMusica");
let reproduciendo = false;

btnMusica.addEventListener("click", () => {
    if (reproduciendo) {
        audio.pause();
        btnMusica.innerHTML = "🎵 Reproducir Música";
        reproduciendo = false;
    } else {
        audio.play();
        btnMusica.innerHTML = "⏸️ Pausar Música";
        reproduciendo = true;
    }
});

// =========================
// CUENTA REGRESIVA
// =========================
// Configuramos la fecha de la boda: 13 de noviembre de 2026 a las 18:30 hrs
const fechaBoda = new Date("November 13, 2026 18:30:00").getTime();

const intervalo = setInterval(() => {
    const ahora = new Date().getTime();
    const distancia = fechaBoda - ahora;

    // Cálculos matemáticos para días, horas, minutos y segundos
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Mostramos los resultados en el HTML (agregando un 0 si es menor a 10)
    document.getElementById("dias").innerHTML = dias < 10 ? "0" + dias : dias;
    document.getElementById("horas").innerHTML = horas < 10 ? "0" + horas : horas;
    document.getElementById("minutos").innerHTML = minutos < 10 ? "0" + minutos : minutos;
    document.getElementById("segundos").innerHTML = segundos < 10 ? "0" + segundos : segundos;

    // Si la fecha ya pasó, detenemos el contador
    if (distancia < 0) {
        clearInterval(intervalo);
        document.getElementById("cuenta-regresiva").innerHTML = "<p>¡Llegó el gran día!</p>";
    }
}, 1000);

