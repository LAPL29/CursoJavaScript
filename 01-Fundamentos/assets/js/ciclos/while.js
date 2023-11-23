//Fernando
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// Mi ejemplo
let j = 0;
let par = 0, impar = 0;
let hola;


/* Con operadores ternarios*/
while (j < 20) {
    hola = (j % 2 == 0) ? par++ : impar++;
    j++;
    // if (j % 2 == 0) {
    //     console.log(`El numero ${j} es par`);
    //     par++;
    // } else {
    //     console.log(`El numero ${j} es impar`);
    //     impar++;
    // }
}
console.log(`Hay ${par} numeros par y ${impar} numeros impares`);
// console.warn('a');
// console.log("Hay " + par + " numeros pares");
// console.log("Hay " + impar + " numeros impares");

console.warn('asdas');

let frutas = ['Fresa','Manzana','Peraza','Mandarina','Naranja','Kiwi'];

let scrumBoys = ['Luis Peraza', 'Josias Emiliano', 'Angel Gabriel', 'Pablo Ademir','Adrian Ortiz'];

scrumBoys.sort();
console.log(scrumBoys);
scrumBoys.sort(function (a,b) {return a.length - b.length});
console.log(scrumBoys);
scrumBoys.unshift('Abraham Levi');
scrumBoys.sort();
console.log(scrumBoys);