const frutas = ['Manzana', 'Pera', 'Piña'];

const otrasFrutas = frutas.slice();

for(let i = 0; i< frutas.length; i++){
    if(frutas[i].length < 5 ){
        frutas.pop();
        i--;
    }else{
        otrasFrutas.push('Hola');
    }
}
console.table({frutas,otrasFrutas});