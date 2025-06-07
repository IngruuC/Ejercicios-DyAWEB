// 3. Arrays

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
             "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

// a. Mostrar meses 5 y 11
console.log("3.a) Mes 5:", meses[4], "Mes 11:", meses[10]);

// b. Ordenar alfabéticamente
let mesesOrdenados = [...meses].sort();
console.log("3.b) Ordenados:", mesesOrdenados);

// c. Agregar al principio y final
meses.unshift("Principio");
meses.push("Final");
console.log("3.c) Con elementos agregados:", meses);

// d. Quitar del principio y final
meses.shift();
meses.pop();
console.log("3.d) Sin los extremos:", meses);

// e. Invertir orden
let mesesInvertidos = [...meses].reverse();
console.log("3.e) Invertidos:", mesesInvertidos);

// f. Unir con guiones
let mesesUnidos = meses.join("-");
console.log("3.f) Unidos por '-':", mesesUnidos);

// g. Copia de Mayo a Noviembre
let mesesCopia = meses.slice(4, 11);
console.log("3.g) Mayo a Noviembre:", mesesCopia);