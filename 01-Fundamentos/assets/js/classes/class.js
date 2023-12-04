class Persona{

    static _conteo = 0;

    static get conteo(){
        return Persona._conteo + ' Instancias';
    }
    static mensaje (){
        console.log('Hola soy un metodo estatico');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';
 

    constructor(nombre,codigo,frase){
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo++;
    }

    set setComidaFavorita(comida){
        this.comida = comida.toUpperCase();
    }
    get getComidaFavorita(){
        return `Mi comida favorita de ${this.nombre } ${this.comida}`;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
} 

const spiderman = new Persona('Peter','Spiderman','Soy tu amigable');
const ironman = new Persona('Tony Stark','IronMan','YO Soy IROMAN');


// console.log(spiderman);
// console.log(ironman);
                   
spiderman.miFrase();
// ironman.miFrase();      
spiderman.setComidaFavorita = 'El pie de cereza';
// spiderman.nemesis = 'Duende Verde';
// console.log(spiderman.getComidaFavorita);
// console.log(spiderman);
// Persona._conteo = 2;


console.log('Conteo estatico', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();

Persona.propiedadExterna = 'Hola Mundo'
console.log(Persona.propiedadExterna);
console.log(Persona);