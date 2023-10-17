<script lang="ts">
	import MouseIndicator from '../MouseIndicator.svelte';

	export let data: { title: string; subtitle: string };
</script>

<template lang="pug">
	section(class="home flex-col flex-col--center")
		div(class="wrapper flex-col flex-col--center")
			div(class="home__title flex-col flex-col--center")
				h1 { data.title }
				h2 { data.subtitle }
			div(class="home__mouse")
				MouseIndicator
</template>

<style lang="scss">
	.home {
		background-color: #fff;

		.wrapper {
			flex-grow: 1;
			width: 80%;

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
