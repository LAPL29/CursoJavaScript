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

class Heroe extends Persona{
    clan = 'Sin clan';
    constructor (nombre,codigo,frase){
        super (nombre,codigo,frase); // Referencia a la clase que extiende directamente
        this.clan = 'Los Vengadores';
    }

    quienSoy(){
        console.log(`soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
}

const spiderman = new Heroe('Peter','Spiderman','Soy tu amigable');
// const spiderman = new Heroe();
console.log(spiderman);
spiderman.quienSoy();