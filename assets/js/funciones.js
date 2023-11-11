function saludar (nom){
    nom = "luis";
    
    console.log(`hola ${nom}`);
}
function saludar2 (nom){
    console.log(arguments);
    console.log('Hola '+ nom);
}
 
//Funcion anonima
const saludar3 = function (nom){
    console.log(`hola ${nom}`);
}

const saludarFlecha = () =>{
    console.log("Hola flecha");

}
const saludarFlecha2 = (nom) =>{
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







