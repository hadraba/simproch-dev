<script lang="ts">
	import SkillButton from './SkillButton.svelte';
	export let imagePath: string;
	export let title: string;
	export let content: string;
</script>

<template lang="pug">
	div(class="experience")
		div(class="experience__img") 
			img(src="/images/company-logos/{imagePath}.png"  alt="{title} logo")
		div(class="experience__content")
			h1(class="experience__content__title") {title}
			div(class="divider")
			div(class="experience__content__description") {content}
			div(class="experience__content__know-more")
				SkillButton(name="Know more" linkTo="/")
</template>

<style lang="scss">
	.experience {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 40px;

		.experience__img {
			align-self: center;
			img {
				max-width: 200px;
			}
		}

		.experience__content {
			display: flex;
			flex-direction: column;

			.experience__content__description {
				margin-top: 12px;
			}

			.experience__content__title {
				margin-bottom: 4px;
			}
		}
	}
</style>
