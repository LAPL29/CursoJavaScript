const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        latitud: -32.957861,
        lng: -1178.70
    },
    trajes: ['Mark 1', 'Mark 5', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265', 
        ubicacion: 'Malibu, California'
        
    },
    'ultima-Pelicula': 'Infinity War',
};

// Al llamas se mandan de manera alfabetica

console.log(personaje);
console.log("Nombre:", personaje.nombre);
console.log("Nombre:", personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('Coors', personaje.coords.latitud);

let nuevo = personaje.trajes.unshift("Hola");

console.log('Trajes', personaje.trajes.length);
// Es para traer al ultimo traje del arreglo
console.log('Trajes', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('vivo',personaje[x]);
console.log('ultima-Peliculas',personaje['ultima-Pelicula']);


// Mas detalles

delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

console.log(personaje);s

// Para bloquear las propiedades del objeto
Object.freeze(personaje);

// Bloquea estas acciones
personaje.dinero = 10000000;
personaje.casado = false;

personaje.direccion.ubicacion = 'Costa rica';

console.log(personaje);

// para dar el nombre de las propiedades
const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);

console.log(propiedades,valores);


