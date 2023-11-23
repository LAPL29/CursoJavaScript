

// let primero = 0, segundo = 1, siguiente = 0;
// let num = 7;

// console.log('0');
// console.log('1');
// for(let i = 2; i < num; i++){
//     siguiente = primero + segundo;
//     console.log(`${siguiente}`);
//     primero = segundo;
//     segundo = siguiente;
// }

// Potencias con operador ternario

let numBase = 5 , potencia = 4, resultado = 1;
let condicion = ( potencia === 0 ) ? '1':'';
for(let i = 1; i <= potencia; i++ ){
    resultado *= numBase; 
}
console.log(resultado);
