function saludar(nom) {
    nom = "luis";

    console.log(`hola ${nom}`);
}
function saludar2(nom) {
    console.log(arguments);
    console.log('Hola ' + nom);
}

//Funcion anonima
const saludar3 = function (nom) {
    console.log(`hola ${nom}`);
}

console.log();
const saludarFlecha = () => {
    console.log("Hola flecha");
}
const saludarFlecha2 = (nom) => {
    console.log(`hola ${nom}`);

}

saludar();
saludar2('Luis', 40, true, 'Mazatlán');
saludar3('Angel');
saludarFlecha();
saludarFlecha2('luis');


// let numbers = [40,2,6,50,1];
// console.log(numbers.sort(function (prev,next) {
//     // if (prev > next){
//     //     return 1;
//     // }
//     // if(prev < next){
//     //     return -1;
//     // }
//     return  prev - next;
// }));



const sumar = (num1, num2) => {
    const resultado = num1 + num2;
    return resultado;
}

const resta = (num1, num2) => {
    const resultado = num1 - num2;
    return resultado;
}

const resultadoFinal = () => {

    const res = sumar(50, 100) - resta(10,5);
    return res;
}
console.log(`El resultado final es: ${resultadoFinal()}`);

































