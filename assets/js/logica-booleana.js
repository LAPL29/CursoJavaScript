
const regresaTrue = () =>{
    console.log('Regresa True');
    return true;
}
const regresaFalse = () =>{
    console.log('Regresa False');
    return false;
}
console.warn('Not o la negación');
console.log(true);  //true
console.log(!true); //false
console.log(!false); //true

console.log(!regresaTrue());
console.log(!regresaFalse());

console.warn('And');  // true si todo los valores son verdaderos

console.log(true && true ); // true
console.log(true && false ); // false

console.log('===========');

console.log(regresaFalse() && regresaTrue());
console.log(regresaTrue() && regresaFalse() );

console.log('===== && ======');
regresaFalse() && regresaTrue();

console.warn('OR');

console.log(true || false); // true con que un sea verdadero es true
console.log(false || false); //false


console.log(regresaTrue() ||  regresaFalse());

console.log('4 Condiciones', true && true && true &&false); //false
console.log('4 Condiciones', true || true || true || false); //ture pibe

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1= true && 'hola mundo' && 150; // asigna el ultimo valor
const a2= false && 'hola mundo' && 150; // false porque si es falso y comparas algo con false siempre va ser false.

const a3 = 'Hola' && 'Mundo' && soyFalse && true; // da falso

const a4 = soyFalse || 'Ya no soy falso'; // Va tomar el ultimo
const a5 = soyFalse || soyUndefined || soyNull || 'Ya no soy falso' || true;  // porque encontro primero el string
const a6 = soyFalse || soyUndefined || regresaTrue() || 'Ya no soy falso' || true;  // porque encontro primero el string



console.log({a1}); 
console.log({a2}); 
console.log({a3}); 
console.log({a4}); 
console.log({a5}); 
console.log({a6}); 
