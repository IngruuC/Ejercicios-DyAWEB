// 6. Funciones

// a. Función suma simple
function suma(a, b) {
    return a + b;
}
let resultadoSuma = suma(5, 4);
console.log("6.a) Resultado suma:", resultadoSuma);

// b. Validar si son números
function sumaValidada(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        alert("6.b) Uno de los parámetros no es un número");
        return NaN;
    }
    return a + b;
}
let resultadoValidado = sumaValidada(5, "x");
console.log("6.b) Resultado suma validada:", resultadoValidado);

// c. Validar si es entero
function validateInteger(n) {
    return Number.isInteger(n);
}
console.log("6.c) ¿7 es entero?:", validateInteger(7));
console.log("6.c) ¿7.5 es entero?:", validateInteger(7.5));

// d. Validar enteros en suma
function sumaEnteros(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        alert("6.d) Uno de los parámetros no es un número");
        return NaN;
    }
    if (!Number.isInteger(a)) {
        alert("6.d) Primer número no es entero, se redondea");
        a = Math.round(a);
    }
    if (!Number.isInteger(b)) {
        alert("6.d) Segundo número no es entero, se redondea");
        b = Math.round(b);
    }
    return a + b;
}
let resultadoEnteros = sumaEnteros(5.7, 3.3);
console.log("6.d) Resultado suma enteros:", resultadoEnteros);

// e. Validación separada para enteros
function validateAndRound(n) {
    if (!Number.isInteger(n)) {
        alert("6.e) El número no es entero, se redondea");
        return Math.round(n);
    }
    return n;
}
function sumaConValidacion(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        alert("6.e) Uno de los parámetros no es un número");
        return NaN;
    }
    a = validateAndRound(a);
    b = validateAndRound(b);
    return a + b;
}
let sumaFinal = sumaConValidacion(2.8, 8.2);
console.log("6.e) Resultado suma con validación separada:", sumaFinal);