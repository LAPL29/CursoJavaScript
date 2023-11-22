
const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman'];
const numeros = [1, 20, 30, 2];
const nuevoHeroe = heroes;

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

console.warn('For in');

for (let i in heroes) {  // va terminar hasta que muestre todo los elementos que hay en el arreglo
    console.log(heroes[i]);
}

console.warn('For of');

for (let heroe of heroes) { // Con solo poner la variable i mostralo los elementos del arreglo
    console.log(heroe);
}

console.warn('For each');

heroes.forEach((element, index) => {
    console.log(element, index);
});

console.warn('a');

heroes.sort();
console.log(heroes);

console.warn('b');
numeros.sort(function (a, b) { return a - b });
console.log(numeros);

console.warn('');
heroes.pop();
console.log(heroes);
nuevoHeroe.push('hola');
console.log(heroes);