// 1. Variables y Operadores

function mostrarResultado(id, texto) {
    document.querySelector(`#${id} .resultados`).innerHTML += `<pre>${texto}</pre>`;
}

// a. Suma de dos variables numéricas
let num1 = 7;
let num2 = 12;
let suma = num1 + num2;
mostrarResultado("ej1", "1.a) Suma de dos números: " + suma);

// b. Concatenación de dos strings
let str1 = "Hola";
let str2 = "Mundo";
let concatenado = str1 + str2;
mostrarResultado("ej1", "1.b) Concatenación de dos strings: " + concatenado);

// c. Suma del largo de dos strings
let palabra1 = "Hello";
let palabra2 = "World";
let sumaLargos = palabra1.length + palabra2.length;
mostrarResultado("ej1", "1.c) Suma de largos: " + sumaLargos);