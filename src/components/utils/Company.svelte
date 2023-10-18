<script lang="ts">
	import KnowMoreButton from './KnowMoreButton.svelte';
	export let imagePath: string;
	export let title: string;
	export let content: string;
</script>

<template lang="pug">
	div(class="experience")
		div(class="experience__content flex-col flex-col--center")
			div(class="experience__img") 
				img(src="/images/company-logos/{imagePath}.png"  alt="{title} logo")
			div()
				p(class="experience__content__description") {content}
				div(class="experience__content__know-more")
				KnowMoreButton(name="Know more" linkTo="{imagePath}")
</template>

<style lang="scss">
	.experience {
		width: 100%;
		height: 100%;
		justify-content: center;
		align-items: center;

		.experience__content {
			display: flex;
			align-items: flex-start;
    		flex-direction: row;
			gap: 3rem;
			align-items: center;

			.experience__img {
				img {
					margin-top: -52.8px;
					max-width: 200px;
				}
			}

			.experience__content__know-more {
				margin-top: 16px;
			}
		}
	}
</style>
