<script lang="ts">
	import Contents from '../contents/contents.json';
	import MouseIndicator from './MouseIndicator.svelte';

	const { title, subtitle } = Contents.main;
</script>

<template lang="pug">
	section(class="home flex-col flex-col--center" id="home")
		div(class="wrapper base-width flex-col flex-col--center")
			div(class="home__title flex-col flex-col--center")
				h1 { title }
				h2 { subtitle }
			div(class="home__mouse")
				MouseIndicator
</template>

<style lang="scss">
	.home {
		background-color: #fff;

		.wrapper {
			flex-grow: 1;

			.home__title {
				margin-top: auto;
			}

			.home__mouse {
				margin-top: auto;
				margin-bottom: 2rem;
			}
		}
	}
</style>
