<script lang="ts">
	import MouseIndicator from '../MouseIndicator.svelte';

	export let data: { title: string; subtitle: string, breadcrumbs: string | undefined; };
	export let id: 'home' | 'experience' = 'home';
</script>

<template lang="pug">
	section(class="home flex-col flex-col--center" id="{id}")
		div(class="wrapper flex-col flex-col--center")
			div(class="home__title flex-col flex-col--center")
				+if('data.breadcrumbs')
					h3 { data.breadcrumbs }
				h1 { data.title }
				h2 { data.subtitle }
			div(class="home__mouse")
				MouseIndicator
</template>

<style lang="scss">
	.home {
		background-color: #fff;
		min-height: 50vh;
		padding: 5vh 0;

		.wrapper {
			flex-grow: 1;
			width: 80%;

			.home__title {
				margin-top: auto;
				margin-bottom:auto;
			}

			.home__mouse {
				margin-top: auto;
				margin-bottom: 2rem;

				@media (max-width: 1080px) {
					display: none;
				}
			}
		}
	}
</style>
