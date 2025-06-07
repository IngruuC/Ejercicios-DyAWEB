// 2. Strings

// a. String a mayúsculas
let texto = "javascript rules";
let textoMayus = texto.toUpperCase();
console.log("2.a) Mayúsculas:", textoMayus);

// b. Primeros 5 caracteres
let texto2 = "Number of the beast";
let primeros5 = texto2.substring(0, 5);
console.log("2.b) Primeros 5 caracteres:", primeros5);

// c. Últimos 3 caracteres
let texto3 = "Back in time";
let ultimos3 = texto3.substring(texto3.length - 3);
console.log("2.c) Últimos 3 caracteres:", ultimos3);

// d. Primera letra mayúscula, resto minúscula
let texto4 = "tHIS IS COOL";
let texto4Formateado = texto4.substring(0,1).toUpperCase() + texto4.substring(1).toLowerCase();
console.log("2.d) Capitalización:", texto4Formateado);

// e. Posición del primer espacio en blanco
let texto5 = "espacio blanco";
let posicionEspacio = texto5.indexOf(" ");
console.log("2.e) Posición primer espacio:", posicionEspacio);

// f. Capitalizar dos palabras largas
let texto6 = "javascript asíncrono";
let espacio = texto6.indexOf(" ");
let palabraA = texto6.substring(0, espacio);
let palabraB = texto6.substring(espacio + 1);
let capitalizado = palabraA.substring(0,1).toUpperCase() + palabraA.substring(1).toLowerCase() + " " +
                   palabraB.substring(0,1).toUpperCase() + palabraB.substring(1).toLowerCase();
console.log("2.f) Capitalizar ambas palabras:", capitalizado);