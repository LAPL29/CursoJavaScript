

// Singleton Instancia unica de la clase
class Singleton {

    static instancia;
    nombre = '';

    constructor(nombre = '',) {
        // console.log(Singleton.instancia); // Undefined

        // const a = undefined;

        // console.log(a); // Undefined
        // console.log(!a); // true
        // console.log(!!a); // False

        if (!!Singleton.instancia) {
            return Singleton.instancia;

        }
        Singleton.instancia = this; // this referencia a la instancia de la clase
        this.nombre = nombre;
        // return this;



    }
}

const instancia1 = new Singleton('Ironman');
const instancia2 = new Singleton('Spiderman');
const instancia3 = new Singleton('Black Panther');

console.log(`Nombre en la instancia1 es : ${instancia1.nombre}`);
console.log(`Nombre en la instancia1 es : ${instancia2.nombre}`);
console.log(`Nombre en la instancia1 es : ${instancia3.nombre}`);



