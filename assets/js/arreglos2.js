let juegos = ['zelda', 'mario', 'Joselito','bambu'];
console.log('Largo: ', juegos.length);

let primero = juegos[0];
let ultimo = juegos[ juegos.length -1 ];

console.log({primero,ultimo});

juegos.forEach((elemento , indice, arr) =>{
    console.log({elemento, indice , arr});
});

// Insertar un nuevo elemento en el arreglo

let nuevaLongitud = juegos.push(' F-zero ');
console.log({ nuevaLongitud, juegos});

// Unshift Agrega el elemento al inicio del arreglo
let nuevaLongitud2 = juegos.unshift(' Mortal Kombat ');
console.log({ nuevaLongitud2, juegos});

// .pop borra el ultimo dato del arreglo
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

// Borra un elemento diciendo primero el indice donde quieres que empieze y despues el numero de elementos que desea borrar
console.log( juegos );
let juegoBorrado2 = juegos.splice(1,2);
console.log({ juegoBorrado2, juegos });

// indexOf es para ver el indice de algo que buscas en un arreglo 
let bambuIndex = juegos.indexOf("bambu");
console.log({bambuIndex});