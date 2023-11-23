/**
 * 2C = Two of Clubs 
 * 2D = Two of Diamonds 
 * 2H = Two of Herts 
 * 2S = Two of Spades 
*/

let deck = [];
const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'Q', 'K'];

const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tipos) {
        for (let esp of especiales) {
            deck.push(esp + tipo);
        }
    }

    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}
crearDeck();

const pedirCarta = () => {
    if(deck.length ===0 ){
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    console.log(carta);
    return carta;
}

const valorCarta = ( carta) => {
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN (valor) ?  puntos = ( valor === 'A' ) ? 11 : 10 :  puntos = valor * 1);
    // puntos = ( isNaN (valor) ?  puntos = ( valor === 'A' ) ? 11 : 10 :  puntos = valor * 1  );
    // console.log(puntos);
}
valorCarta('AD'); 
const valor = valorCarta(pedirCarta());
console.log(valor);


// const valorCarta = ( carta ) => {
//     const valor = carta.substring(0, carta.length - 1);
//     let puntos = 0;
//     // console.log({valor});
//     if( isNaN (valor) ){ // isnt a number
//         puntos = (valor === 'A') ? 11 : 10;

//         // console.log('No es un numero');
//     }else{ 
//         // console.log('Es un numero');
//         puntos = valor * 1 ; // Para regresar en numeros.
//     }
//     console.log(puntos);
// }

// valorCarta('JD'); // SI ES GRIS ES UN STRING


// pedirCarta();

// for (let index = 0; index <= 100; index++) {
//     pedirCarta();
    
// }


const hola = document.createElement('h1');

document.body.append(hola);

hola.innerText = 'CEBO';



