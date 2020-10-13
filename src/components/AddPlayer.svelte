<script>
    import PlayerStore from '../PlayerStore.js';

    const generateUUID = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    let player = { name: '', points: 0 }

    const onSubmit = e => {
        e.preventDefault();
        PlayerStore.update(currentPlayers => {
            return [...currentPlayers, { ...player, uuid: generateUUID() }];
        });
        player = { name: '', points: 0 };
    }
</script>

<h3>Add a player</h3>
<form on:submit={onSubmit}>
    <input type="text" bind:value={ player.name } placeholder="Player name">
    <input type="number" bind:value={ player.points } placeholder="Player points">
    <input type="submit" value="➕ Add Player">
</form>