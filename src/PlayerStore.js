import { writable } from 'svelte/store';

const PlayerStore = writable([
    { name: 'John Doe',     points: 50,     uuid: 1 },
    { name: 'John Doe 2',   points: 100,    uuid: 2 },
    { name: 'John Doe 3',   points: 150,    uuid: 3 },
]);

export default PlayerStore;