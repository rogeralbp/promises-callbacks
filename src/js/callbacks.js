 
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

        name  : 'Ironman',
        power : 'Money'
    },

    spiderman: {

        name  : 'Spiderman',
        power : 'Super Fellings'
    },

    roger: {

        name  : 'Roger',
        power : 'Super Engineer'
    },
};

//Callback return the entire object finded using his ID
export const findHeroe = ( id, callback ) => {

    const heroe = heroes[id];

    if ( heroe ){

        callback(  null, heroe );

    } else {

        callback(`Does not exists an Heroe with the id = ${id}`);
    }

    
};