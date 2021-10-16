 
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

// Example of Promise
export const findHeroe = ( id ) => {

    const heroe = heroes[id];

    return new Promise( ( resolve, reject) => {

        if ( heroe ){

            resolve(  heroe );// this happend when everything works fine
    
        } else {
    
            reject(`Does not exists an Heroe with the id = ${id}`);// this happend when something works bad
        }
    } );

};