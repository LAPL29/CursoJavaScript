
const dia = 0; // 0 : domingo

const horaActual = 10;

let horaApertura ; 
let mensaje ;

horaApertura = ([0,6].includes(dia)) ? 9 : 11;   //Operador Ternario ? = if y : = else

mensaje = (horaActual >= horaApertura) ?  'Esta abierto' :  'Esta cerrado';
console.log({horaApertura,mensaje});

// if(horaActual >= horaApertura){
//     mensaje = 'Esta abierto';
// }else{
//     mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
// }

// console.log({horaApertura,mensaje});


// Segundo forma

// if( [0,6].includes( dia ) ){ // Metodo de arrays para saber si existe esos datos en el arreglo
//     console.log('Fin de semana');
//     horaApertura = 9;
// }else{
//     console.log('Dias de la semana');
//     horaApertura = 11;
// }

// if(horaActual >= horaApertura){
//     mensaje = 'Esta abierto';
// }else{
//     mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
// }

// console.log({horaApertura,mensaje});


// Primera forma

// if( dia === 0 || dia === 6 ){
//     console.log('Fin de semana');
//     horaApertura = 9;
// }else{
//     console.log('Dias de la semana');
//     horaApertura = 11;
// }

// if(horaActual >= horaApertura){
//     mensaje = 'Esta abierto';
// }else{
//     mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
// }

// console.log({horaApertura,mensaje});
