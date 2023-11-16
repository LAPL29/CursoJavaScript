

const heroes = ['Batman','Superman', 'Mujer Maravilla', 'Aquaman'];
const nuevoHeroe = heroes;

for(let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
}

console.warn('For in');

for(let i in heroes){  // va terminar hasta que muestre todo los elementos que hay en el arreglo
    console.log(heroes[i]);
}

console.warn('For of');

for( let heroe of heroes){ // Con solo poner la variable i mostralo los elementos del arreglo
    console.log(heroe); 
}

console.warn('For each');

heroes.forEach(element => {
    console.log(element);
});

heroes.pop();
console.log(heroes);
nuevoHeroe.push('hola');
console.log(heroes);

