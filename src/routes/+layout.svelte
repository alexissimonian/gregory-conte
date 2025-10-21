<script lang="ts">
	import '../app.scss';
    import GregNavbar from '$lib/components/GregNavbar.svelte';
	let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" sizes="16x16" href="/favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="manifest" href="/site.webmanifest">
</svelte:head>
<GregNavbar/>
{@render children?.()}

