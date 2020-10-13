<script>
    import { scale } from 'svelte/transition';
    import { flip } from 'svelte/animate';
    import PlayerStore from '../PlayerStore.js';
    import Player from './Player.svelte';
    
    let players = [];
    PlayerStore.subscribe(data => players = data);
</script>

<div class="player-list-card">
    <h3>List of players</h3>
    {#if players.length === 0}
        <p>No players.</p>
    {:else}
        {#each players as player (player.uuid)}
            <div transition:scale animate:flip={{duration: 500}}>
                <Player 
                    name={ player.name }
                    points={ player.points }
                    uuid={ player.uuid }
                />
            </div>
        {/each}
    {/if}
</div>