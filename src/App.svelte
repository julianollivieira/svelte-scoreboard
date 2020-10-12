<script>
	import Player from './Player.svelte';
	import AddPlayer from './AddPlayer.svelte';

	const generateUUID = () => {
		return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
	} 

	let players = [
		{ name: 'John Doe', points: 50, uuid: generateUUID() },
		{ name: 'John Doe 2', points: 100, uuid: generateUUID() },
		{ name: 'John Doe 3', points: 150, uuid: generateUUID() },
	]
	
	const addPlayer = e => {
		const newPlayer = {
			name: e.detail.name,
			points: e.detail.points,
			uuid: generateUUID(),
		}
		players = [...players, newPlayer];
	}

	const removePlayer = e => {
		players = players.filter(player => player.uuid !== e.detail);
	}

</script>

<div class="container">
	<h1>Player scoreboard</h1><hr>
	<AddPlayer on:addplayer={ addPlayer }/>
	<div class="player-list-card">
		<h3>List of players</h3>
		{#if players.length === 0}
			<p>No players.</p>
		{:else}
			{#each players as player}
				<Player 
					name={ player.name }
					points={ player.points }
					uuid={ player.uuid }
					on:removeplayer={ removePlayer }
				/>
			{/each}
		{/if}
	</div>
</div>