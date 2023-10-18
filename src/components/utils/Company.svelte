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
			div(class="divider")
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
		gap: 40px;

		.experience__content {
			.experience__img {
				img {
					max-width: 200px;
				}
			}

			.experience__content__know-more {
				margin-top: 16px;
			}
		}
	}
</style>
