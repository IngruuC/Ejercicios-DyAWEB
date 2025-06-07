// 4. If Else

function mostrarResultado(id, texto) {
    document.querySelector(`#${id} .resultados`).innerHTML += `<pre>${texto}</pre>`;
}

// a. Número aleatorio y alerta según valor
let random = Math.random();
let mensajeRandom = random >= 0.5 ? "4.a) Greater than 0.5" : "4.a) Lower than 0.5";
mostrarResultado("ej4", mensajeRandom);

// b. Variable Age y mensajes según rango
let age = Math.floor(Math.random() * 101);
let mensaje;
if (age < 2) {
    mensaje = "Bebe";
} else if (age <= 12) {
    mensaje = "Niño";
} else if (age <= 19) {
    mensaje = "Adolescente";
} else if (age <= 30) {
    mensaje = "Joven";
} else if (age <= 60) {
    mensaje = "Adulto";
} else if (age <= 75) {
    mensaje = "Adulto mayor";
} else {
    mensaje = "Anciano";
}
mostrarResultado("ej4", "4.b) Edad: " + age + " - " + mensaje);