/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../data/heroes";

// Variables de entorno
export const asyncComponent = (element) => {

    console.log('asyncComponent');

    console.log('Inicio de componente');

    const id1 = '5d86371fd55e2e2a30fe1ccb1';
    
    findhero(id1)
        .then(name => element.innerHTML = name)
        .catch(error => element.innerHTML = error)

    console.log('Fin de componente');

}

const findhero = async (id) => {

    const hero = heroes.find(hero => hero.id === id);
    if (!hero) throw `HERO WITH ID ${id} not found`;
    return hero.name;
}