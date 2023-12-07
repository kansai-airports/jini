import entry from './core/entry.js';
import {MSG} from './core/const.js';

const main = (options) => {
    entry.start(options)
        .catch((err)=>{console.error(`${MSG.init_error}: ${err}`)})
        .finally(()=>{});
}

main();