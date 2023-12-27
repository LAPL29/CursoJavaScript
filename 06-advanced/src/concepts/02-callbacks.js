/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../data/heroes";

// Callback es una funcion que recibe un argumento ,y ese argumento es una funcion que se invoca dentro su funcion


export const callbacksComponents = (element) => {
    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f25a058e5b1c8a65e';

    console.log('callbacksComponent');

    findHero(id1, (error, hero1) => {
        if (error) {
            element.innerHTML = error;
            return;
        }

        findHero(id2, (error, hero2) => {
            if (error) {
                element.innerHTML = error;
                return;
            }

            element.innerHTML = `${hero1.name} / ${hero2.name}`; // Si el hero existe busca la propiedad nombre y si no da undifined
        })
    });
}

/**
 * 
 * @param {String} id 
 * @param {(error: String|null, hero: Object) => void} callback 
 */
const findHero = (id, callback) => {

    const hero = heroes.find(hero => hero.id === id);

    if (!hero) {
        callback(`Hero with id ${id} not found.`);
        return; // undefined
    }

    callback(null, hero);
}

