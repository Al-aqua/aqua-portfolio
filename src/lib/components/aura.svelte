<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let mouseX = $state(0);
	let mouseY = $state(0);

	onMount(() => {
		if (!browser) return;

		const handleMouseMove = (e: MouseEvent) => {
			mouseX = e.clientX;
			mouseY = e.clientY;
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	});
</script>

<div
	class="pointer-events-none fixed -left-10 -top-10 h-20 w-20 rounded-full bg-primary opacity-75 blur-2xl"
	style="transform: translate({mouseX}px, {mouseY}px)"
></div>
