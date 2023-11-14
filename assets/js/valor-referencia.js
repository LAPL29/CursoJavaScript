let a = 10;
let b = a;
a = 30;

console.log({a,b});

let juan = {nombre: 'juan'};
let ana  = { ...juan }; // operador spread o algo asi rompe la referencia
ana.nombre = 'Ana';


console.log({juan,ana});

const cambiarNombre = ({ ...persona}) =>{
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'peter'};
let tony = cambiarNombre(peter);

console.log({peter,tony});

// Arreglos

const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas = [...frutas]; // Sin el operador rest en ambos arreglos iban a salir la nueva fruta
const otrasFrutas2 = frutas.slice(); // Hace lo mismo que arriba
console.timeEnd('slice');

console.time('spread');
const otrasFrutas3 = [...frutas]; // Sin el operador rest en ambos arreglos iban a salir la nueva fruta
const otrasFrutas4 = frutas.slice(); // Hace lo mismo que arriba
console.timeEnd('spread');


otrasFrutas.push('Mango');
console.table({frutas,otrasFrutas,otrasFrutas2});