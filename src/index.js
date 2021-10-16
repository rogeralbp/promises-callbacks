
//import './styles.css';

import { slowPromise, mediumPromise, fastPromise, findHeroe, findHeroeAsync } from './js/promises'

// slowPromise.then( console.log() );
// mediumPromise.then( console.log() );
// fastPromise.then( console.log() );

// Promise.race([ slowPromise, mediumPromise, fastPromise ])
//         .then(console.log);


findHeroe('cap').then( heroe => console.log( heroe ) )
                .catch( console.warn );

findHeroeAsync('roger').then( heroe => console.log( heroe ) )
                .catch( console.warn );
