// 5. For

function mostrarResultado(id, texto) {
    document.querySelector(`#${id} .resultados`).innerHTML += `<pre>${texto}</pre>`;
}

// a. Array de palabras, mostrar cada palabra
let palabras = ["javascript", "asíncrono", "funciones", "arrays", "objetos"];
for (let i = 0; i < palabras.length; i++) {
    mostrarResultado("ej5", "5.a) Palabra: " + palabras[i]);
}

// b. Primera letra mayúscula, mostrar cada una
for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];
    let capitalizada = palabra[0].toUpperCase() + palabra.slice(1);
    mostrarResultado("ej5", "5.b) Capitalizada: " + capitalizada);
}

// c. Unir palabras en una oración y mostrar
let sentence = "";
for (let i = 0; i < palabras.length; i++) {
    sentence += palabras[i] + " ";
}
mostrarResultado("ej5", "5.c) Oración completa: " + sentence.trim());

// d. Array vacío, llenar con números del 0 al 9 y mostrar
let numeros = [];
for (let i = 0; i < 10; i++) {
    numeros.push(i);
}
mostrarResultado("ej5", "5.d) Array de números 0-9: " + numeros.join(", "));