
const crearPersona = (nombre,apellido) => ({nombre,apellido}); // Poner entreparentesis porque si no marca undifined



const persona = crearPersona('luis','Peraza');
console.log(persona);

function imprimirArgumentos(){
    console.log(arguments);
}
// const imprimirArgumentos2 = () =>{  // Esto va marcar un error
//     console.log(arguments);
// }
const imprimirArgumentos3 = (edad,...arg) =>{  // ... parametro rest para que mande todo 
    // console.log({edad,arg});
    return arg;
}


imprimirArgumentos(10,true,false,'Luis','Hola');
// imprimirArgumentos2(10,true,false,'Luis','Hola');
const [casado,vivo,nombre,saludo] = imprimirArgumentos3(10,true,false,'Luis','Hola');
console.log({casado,vivo,nombre,saludo});

const {apellido: nuevoApellido} = crearPersona('luis','Peraza');
console.log({nuevoApellido});

//Destructuracion de argumentos



const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    // edad: 40,
    trajes: ['Mark 1', 'Mark 5', 'Hulkbuster'],
};


const imprimePropiedades = ({nombre,codeName, vivo,edad=15, trajes})=>{
    // console.log({tony});
    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades(tony);