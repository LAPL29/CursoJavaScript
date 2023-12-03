/**
 * 2C = Two of Clubs 
 * 2D = Two of Diamonds 
 * 2H = Two of Herts 
 * 2S = Two of Spades 
*/

// Patron modulo

const miModulo = (() => { //funciones anonimas autoinvocadas h
    'use strict'

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'], especiales = ['A', 'J', 'Q', 'K'];

    // let puntosJugador = 0, puntosComputadora = 0;
    let puntosJugadores = [];

    // Referencias del html
    const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo'),
        divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHTML = document.querySelectorAll('small');

    // Esta funcion inicializa el deck
    const inicializarDeck = (numJugadores = 2) => {
        deck = crearDeck();
        puntosJugadores = [];

        for (let index = 0; index < numJugadores; index++) {
            puntosJugadores.push(0);
        }

        puntosHTML.forEach(Element => Element.innerText = 0);
        divCartasJugadores.forEach(Element => Element.innerText = '');

        btnPedir.disabled = false;
        btnDetener.disabled = false;



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
        return (isNaN(valor) ? (valor === 'A') ? 11 : 10 : valor * 1);

    }

    //Turno: 0 = primer y el ultimo = compu
    const acumularPuntos = (carta, turno) => {

        puntosJugadores[turno] += valorCarta(carta);
        puntosHTML[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];

    }
    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);
    }

    const determinarGanador = () => {
        const [puntosMinimos, puntosComputadora] = puntosJugadores; //Desestructuracion
        setTimeout(() => {
            if (puntosComputadora === puntosMinimos) {
                alert('Nadien gana')
            } else if (puntosMinimos > 21) {
                alert('La computadora gana');
            } else if (puntosComputadora > 21 || puntosComputadora < puntosJugadores[0]) {
                alert('El Jugador Gana');
            } else {
                alert('La Computadora Gana');
            }

        }, 100);
    }

    // Turno Computadora
    const turnoComputadora = (puntosMinimos) => {
        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta(carta, puntosJugadores.length - 1);

        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
        determinarGanador();
    }

    // Eventos
    btnPedir.addEventListener('click', () => { //callback
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);

        crearCarta(carta, 0)

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
        turnoComputadora(puntosJugadores[0]);

    });

    btnNuevo.addEventListener('click', () => { //callback
        inicializarDeck();
    });

    return {
        nuevoJuego: inicializarDeck
    };

})();
