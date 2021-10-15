 
/**
 * Literal Objects
 * Database
 */
const heroes = {

    cap: {

        name  : 'Captain America',
        power : 'Lidership'
    },

    ironman: {

        name  : 'IronMan',
        power : 'Money'
    },

    spiderman: {

        name  : 'SpiderMan',
        power : 'Super Fellings'
    },
};

//Callback return the entire object finded using his ID
export const findHeroe = ( id, callback ) => {

    const heroe = heroes[id];

    callback( heroe );
    
};