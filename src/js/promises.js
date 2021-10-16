 
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


// Example of Promise with Async
export const findHeroeAsync = async( id ) => {

    const heroe = heroes[id];

        if ( heroe ){

            return heroe;

        } else {
    
            throw `Does not exists an Heroe with the id = ${id}`;
        }

};

const slowPromise = new Promise( ( resolve, reject ) => {

    setTimeout(() => resolve('Slow Promise') , 2000); // 2 seconds

});

const mediumPromise = new Promise( ( resolve, reject ) => {

    setTimeout(() => resolve('Medium Promise') , 1500);// 1.5 seconds

});

const fastPromise = new Promise( ( resolve, reject ) => {

    setTimeout(() => resolve('Fast Promise') , 1000);// 1 second

});

export { // cool way to export functions, objects, etc
    slowPromise, mediumPromise, fastPromise
}