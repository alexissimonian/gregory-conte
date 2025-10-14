<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.scss';
    import GregNavbar from '$lib/components/GregNavbar.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<GregNavbar/>
{@render children?.()}

