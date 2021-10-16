
import { getHeroesArray, getHeroeAwait } from './js/await';

console.time('await');

getHeroeAwait('roger')

    .then( heroe => {

        console.log( heroe );

        console.timeEnd('await');

}).catch( console.warn );

