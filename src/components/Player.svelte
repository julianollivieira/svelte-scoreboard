<script>
    import PlayerStore from '../PlayerStore.js';
    export let name, points, uuid;
    
	const updatePoints = action => {
        PlayerStore.update(currentPlayers => {
            let newPlayerList = [...currentPlayers];
            let updatedPlayer = newPlayerList.find(player => player.uuid == uuid);

            if (action == 'add')
                updatedPlayer.points += 1;
            if (action == 'remove')
                updatedPlayer.points -= 1;
            if (action == 'set')
                updatedPlayer.points = points;

            return newPlayerList;
        });
    }

    const removePlayer = () => {
        PlayerStore.update(currentPlayers => {
            return currentPlayers.filter(item => item.uuid != uuid);
        });
    }
</script>

<div class="player-card">
    <details>
        <summary>
            🧑 { name }, { points } points
            <a on:click={ removePlayer }>❌</a>
        </summary>
        <pre><code>UUID: { uuid }</code></pre>
        <button on:click={ () => updatePoints('add') }>+1</button>
        <button on:click={ () => updatePoints('remove') }>-1</button>
        <input 
            type="number"
            bind:value={ points }
            on:input={ () => updatePoints('set') 
        }>
    </details>
</div>

<style>
    summary a { float: right; }
    summary a:hover { text-decoration: none; }
</style>