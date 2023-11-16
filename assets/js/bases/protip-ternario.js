const elMayor = (a,b) => ( a > b) ? a : b;  // si tiene un return se puede hacer en una linea de codigo

const tieneMembresia = (miembro) => (miembro) ? '2 Dólares' : '10 Dólares';

const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    (amigo)? 'Thor': 'Loki',
    (()=> 'Nick Fury')(), //Funcion anonima autoinvocada;
    elMayor(10,15)
];
console.log(elMayor(10,15));
console.log(tieneMembresia(true));
console.log(amigosArr);

const nota = 100; // a + a b,
const grado = nota >= 95 ? 'A+':
              nota >= 90 ? 'A': 
              nota >= 85 ? 'B+': 
              nota >= 80 ? 'B': 
              nota >= 75 ? 'C+': 
              nota >= 70 ? 'C': 'F';

console.log({nota,grado});
