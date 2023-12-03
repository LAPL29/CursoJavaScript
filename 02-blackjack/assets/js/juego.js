/**
 * 2C = Two of Clubs 
 * 2D = Two of Diamonds 
 * 2H = Two of Herts 
 * 2S = Two of Spades 
*/

// Patron modulo

(() => { //funciones anonimas autoinvocadas h
    'use strict'

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'], especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugador = 0, puntosComputadora = 0;

    // Referencias del html
    const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo'),
        divCartasJugador = document.querySelector('#jugador-cartas'),
        divCartasComputadora = document.querySelector('#computadora-cartas'),
        puntosHTML = document.querySelectorAll('small');

    // Esta funcion inicializa el deck
    const inicializarDeck = () => {
        deck = crearDeck();
    }

    //Esta funcion crea un nuevo deck
    const crearDeck = () => {
        deck = [];
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

        return _.shuffle(deck);
    }

    const pedirCarta = () => {
        if (deck.length === 0) {
            throw 'No hay cartas en el deck';
        }
        return deck.pop();
    }

    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1);
        return (isNaN(valor) ? (valor === 'A') ? 11 : 10 : valor * 1 );
        // puntos = ( isNaN (valor) ?  puntos = ( valor === 'A' ) ? 11 : 10 :  puntos = valor * 1  );
        // console.log(puntos);
    }

    // Turno Computadora
    const turnoComputadora = (puntosMinimos) => {
        do {
            const carta = pedirCarta();
            puntosComputadora += valorCarta(carta);
            puntosHTML[1].innerText = puntosComputadora;

            const imgCarta = document.createElement('img');
            imgCarta.src = `assets/cartas/${carta}.png`;
            imgCarta.classList.add('carta');
            divCartasComputadora.append(imgCarta);
            if (puntosMinimos > 21) {
                break;
            }

        } while ((puntosComputadora < puntosMinimos) && puntosMinimos < 21);

        setTimeout(() => {
            if (puntosComputadora === puntosJugador) {
                alert('Nadien gana')
            } else if (puntosMinimos > 21) {
                alert('La computadora gana');
            } else if (puntosComputadora > 21 || puntosComputadora < puntosJugador) {
                alert('El Jugador Gana');
            } else {
                alert('La Computadora Gana');
            }

        }, 100);
    }

    // Eventos
    btnPedir.addEventListener('click', () => { //callback
        const carta = pedirCarta();
        puntosJugador += valorCarta(carta);
        puntosHTML[0].innerText = puntosJugador;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugador.append(imgCarta);

        if (puntosJugador > 21) {
            console.warn('Lo siento mucho has perdido');
            btnPedir.disabled = true; //bloque el boton 
            btnDetener.disabled = true; //bloque el boton  
            turnoComputadora(puntosJugador);


        } else if (puntosJugador === 21) {
            console.warn('Ganaste');
            btnPedir.disabled = true; //bloque el boton  
            btnDetener.disabled = true; //bloque el boton  s
            turnoComputadora(puntosJugador);
        }

    });

    btnDetener.addEventListener('click', () => { //callback
        btnPedir.disabled = true; //bloque el boton  
        btnDetener.disabled = true; //bloque el boton  
        turnoComputadora(puntosJugador);

    });

    btnNuevo.addEventListener('click', () => { //callback
        inicializarDeck();
        // deck = [];
        // crearDeck();
        btnPedir.disabled = false; //bloque el boton  
        btnDetener.disabled = false; //bloque el boton

        puntosJugador = 0;
        puntosComputadora = 0;
        puntosHTML[0].innerText = puntosJugador;
        puntosHTML[1].innerText = puntosComputadora;

        divCartasComputadora.innerHTML = '';
        divCartasJugador.innerHTML = '';

    });

})();

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
