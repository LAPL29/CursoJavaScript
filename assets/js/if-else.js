let a = 10;

if(a >= 10){ 
    console.log('A es mayor a 10');

}else{
    console.log('A es menor a  10');

}

console.log('Fin de programa');

const hoy = new Date();

let dia = hoy.getDay(); // 0: Domingo 1:Lunes 2:Martes  ......

console.log({dia});

if( dia == '5'){
    console.log('Domingo');
}else if(dia === 1){
    console.log('Lunes');
    // if(dia ===1){
    //     console.log('Lunes');
    // }else{
    //     console.log('No es lunes ni domingo');
    // }
}

dia = 6;
const dias = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado',
};
const dias2 = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];

console.log(dias[dia] || 'Dia no definido');
console.log(dias2[dia] || 'Dia no definido'); 