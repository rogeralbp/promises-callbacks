
import './styles.css';
import { findHeroe } from './js/callbacks';

const heroeId = 'IronMan';

findHeroe( heroeId, ( heroe ) => {
    
    console.log( heroe );

});