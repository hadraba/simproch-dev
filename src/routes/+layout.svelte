<script lang="ts">
	import Header from '../components/Header.svelte';
	import Home from '../components/Home.svelte';
	import About from '../components/About.svelte';
	import Experience from '../components/Experience.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<template lang="pug">
	div(class="site")
        Header
        main
            Home
            About
            Experience
        Footer
</template>

<style>
	.site {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
	}
</style>
