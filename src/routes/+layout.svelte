<script lang="ts">
	import Header from '../components/Header.svelte';
	import Home from '../components/Home.svelte';
	import About from '../components/About.svelte';
	import Experience from '../components/Experience.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<template lang="pug">
	div(class="site flex-col")
		Header
		main(class="flex-col")
			slot
		Footer
</template>

<style lang="scss">
	.site {
		min-height: 100vh;
	}

	main {
		flex: 1;
	}
</style>
