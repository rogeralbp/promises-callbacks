
import { findHeroe  } from './js/promises';
import './styles.css';


const heroeId1 = 'roger';
const heroeId2 = 'spiderman';


// heroeId1
// findHeroe( heroeId1, ( err, heroe1 ) => {
    
//     if ( err ){ return console.error( err ); }


//     // heroeId2
//     findHeroe( heroeId2, ( err, heroe2 ) => {
    
//         if ( err ){ return console.error( err ); }
    
//         console.log(`Sending ${heroe1.name} and ${heroe2.name} to visit the Moon :O`);
//     });


// });


// findHeroe( heroeId1 ).then( heroe1 => {

//     //console.log(`Sending ${heroe1.name} to visit the Moon :O`);

//     findHeroe( heroeId2 ).then( heroe2 => {

//         console.log(`Sending ${heroe1.name} and ${heroe2.name} to visit the Moon :O`);
//     })
// });

Promise.all( [ findHeroe(heroeId1), findHeroe(heroeId2) ] )

    .then( ([ heroe1, heroe2 ]) => {
    // console.log('promise.all', arr);
    console.log(`Sending ${heroe1.name} and ${heroe2.name} to visit the Moon :O`);
})

console.log('End of Program.');