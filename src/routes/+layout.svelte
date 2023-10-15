<script>
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
</script>

<template lang="pug">
	div(class="app")
		Header
		main
			slot
		Footer
</template>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 48rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
