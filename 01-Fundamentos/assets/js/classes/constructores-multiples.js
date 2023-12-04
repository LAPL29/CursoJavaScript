class Persona{

    static porObjeto({nombre,apellido,pais}){ //Destructuracion
        return new Persona(nombre,apellido,pais);
    }

    constructor(nombre,apellido,pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getinfo(){
        console.log(`info : ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }

}

const fher = {
    nombre: 'Fernado',
    apellido: 'Herrera',
    pais: 'Costa rica'
}

const nombre1 = 'Melissa',apellido1 = 'Flores', pais1 = 'Honduras';

const persona1 = new Persona(nombre1,apellido1,pais1);

const persona2 = Persona.porObjeto(fher);

persona1.getinfo();
persona2.getinfo();