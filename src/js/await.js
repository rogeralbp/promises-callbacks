import { findHeroeAsync, findHeroe } from "./promises";


const heroesIds = ['cap', 'ironman', 'spiderman', 'roger'];

export const getHeroesArray = async() => {

    return await Promise.all( heroesIds.map( findHeroe ) );

};

export const getHeroeAwait = async( id ) => {

    try {

        const heroe = await findHeroeAsync( id );
        return heroe;
        
    } catch ( err ) {

        console.log('catch!!');
        console.log(err);
    }

}