/**
 * 
 * @param {HTMLDivElement} element 
 */

import { heroes } from "../data/heroes"

// Variables de entorno
export const asyncAwaitComponent = async(element) =>{

    const id1 = '5d86371fd55e2e2a30fe1ccb2';
    const id2 = '5d86371fd55e2e2a30fe1cc3';

    try {     
        // Se espera
        const hero1 = await findhero(id1);
        const hero2 = await findhero(id2);
    
        element.innerHTML = `${hero1.name} / ${hero2.name}`;
        
    } catch (error) {
        element.innerHTML = error;
            
    }
    
}


const findhero = async (id) => {
    const hero = heroes.find(hero => hero.id === id);
    if (!hero) throw `HERO not found`;
    return hero;
}

    
