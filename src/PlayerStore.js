import { writable } from 'svelte/store';

const PlayerStore = writable([
    { name: 'John Doe',     points: 50,     uuid: 'auq81hdcmcro17wxdgsj2p' },
    { name: 'John Doe 2',   points: 100,    uuid: 'mv8wf1sehgc1im4175igdx' },
    { name: 'John Doe 3',   points: 150,    uuid: 'uglzmvcnxbost046autdj'  },
]);

export default PlayerStore;