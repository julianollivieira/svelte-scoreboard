<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let player = { name: '', points: 0 }

    const onSubmit = e => {
        e.preventDefault();
        dispatch('addplayer', player);
        player = { name: '', points: 0 };
    }
</script>

<h3>Add a player</h3>
<form on:submit={onSubmit}>
    <input type="text" bind:value={ player.name } placeholder="Player name">
    <input type="number" bind:value={ player.points } placeholder="Player points">
    <input type="submit" value="Add Player">
</form>