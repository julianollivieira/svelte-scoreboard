<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let name;
    export let points;
    export let uuid;

	const addPoint = () => points += 1;
    const removePoint = () => points -= 1;
    const removePlayer = () => dispatch('removeplayer', uuid);
</script>

<div class="player-card">
    <details>
        <summary>
            { name }, { points } points
            <a on:click={ removePlayer }>❌</a>
        </summary>
        <pre><code>UUID: { uuid }</code></pre>
        <button on:click={ addPoint }>+1</button>
        <button on:click={ removePoint }>-1</button>
        <input type="number" bind:value={ points }>
    </details>
</div>

<style>
    summary a { float: right; }
    summary a:hover { text-decoration: none; }
</style>