<script lang="ts">
	import { onMount } from 'svelte';

	let count = 0;

	function increment() {
		count += 1;
	}

	onMount(() => {
		console.log('Page mounted');
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button on:click={increment}>
	Count: {count}
</button>