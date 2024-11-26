<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import Navbar from '$lib/components/navbar.svelte';
	import Aura from '$lib/components/aura.svelte';
</script>

<Aura />
<Navbar />
{@render children()}
