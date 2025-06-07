// 3. Arrays

function mostrarResultado(id, texto) {
    document.querySelector(`#${id} .resultados`).innerHTML += `<pre>${texto}</pre>`;
}

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
             "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// a. Mostrar meses 5 y 11
mostrarResultado("ej3", "3.a) Mes 5: " + meses[4] + " Mes 11: " + meses[10]);

// b. Ordenar alfabéticamente
let mesesOrdenados = [...meses].sort();
mostrarResultado("ej3", "3.b) Ordenados: " + mesesOrdenados.join(", "));

// c. Agregar al principio y final
meses.unshift("Principio");
meses.push("Final");
mostrarResultado("ej3", "3.c) Con elementos agregados: " + meses.join(", "));

// d. Quitar del principio y final
meses.shift();
meses.pop();
mostrarResultado("ej3", "3.d) Sin los extremos: " + meses.join(", "));

// e. Invertir orden
let mesesInvertidos = [...meses].reverse();
mostrarResultado("ej3", "3.e) Invertidos: " + mesesInvertidos.join(", "));

// f. Unir con guiones
let mesesUnidos = meses.join("-");
mostrarResultado("ej3", "3.f) Unidos por '-': " + mesesUnidos);

// g. Copia de Mayo a Noviembre
let mesesCopia = meses.slice(4, 11);
mostrarResultado("ej3", "3.g) Mayo a Noviembre: " + mesesCopia.join(", "));