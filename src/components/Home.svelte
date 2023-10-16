<script lang="ts">
	import Contents from '../contents/contents.json';
	import MouseIndicator from './MouseIndicator.svelte';

	const { title, subtitle } = Contents.main;
</script>

<template lang="pug">
    section(class="home" id="home")
        div(class="home__title")
            h1 { title }
            h2 { subtitle }
        div(class="home__mouse")
            MouseIndicator
</template>

<style lang="scss">
	.home {
		background-color: rgb(240, 240, 240);
		display: flex;
		flex-direction: column;
		align-items: center;

		.home__title {
			margin-top: auto;
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.home__mouse {
			margin-top: auto;
			margin-bottom: 2rem;
		}
	}
</style>
