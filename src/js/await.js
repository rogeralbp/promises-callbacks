import { findHeroeAsync } from "./promises";


const heroesIds = ['cap', 'ironman', 'spiderman', 'roger'];

export const getHeroesArray = async() => {

    const heroesArray = [];

    for( const id of heroesIds ){

        const heroe = await findHeroeAsync( id );

        heroesArray.push( heroe );
    }

    return heroesArray;
};