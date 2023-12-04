
const luis = {
    nombre: 'luis',
    edad: '20',
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}}`);
    }
}
const Jesus = {
    nombre: 'Jesus',
    edad: '22',
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}}`);
    }
}

function Persona(nombre,edad){
    console.log('Se ejecuto esta linea');
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}}`);
    }
}

const luisp =  new Persona('luis',20);
const maria =  new Persona('maria',18);
console.log(maria);
maria.imprimir();
luisp.imprimir();


// luis.imprimir();
// Jesus.imprimir();