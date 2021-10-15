
import { findHeroe } from './js/callbacks';
import './styles.css';


const heroeId1 = 'roger';
const heroeId2 = 'spiderman';

// heroeId1
findHeroe( heroeId1, ( err, heroe1 ) => {
    
    if ( err ){ return console.error( err ); }


    // heroeId2
    findHeroe( heroeId2, ( err, heroe2 ) => {
    
        if ( err ){ return console.error( err ); }
    
        console.log(`Sending ${heroe1.name} and ${heroe2.name} to visit the Moon :O`);
    });


});

console.log('End of Program.');