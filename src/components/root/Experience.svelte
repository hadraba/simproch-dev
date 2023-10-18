<script lang="ts">
	import Company from '../utils/Company.svelte';
	import Contents from '../../contents/contents.json';
	const data = Contents.experience;
</script>

<template lang="pug">
	section(id="experience" class="flex-col flex-col--center")
		div(class="flex-col flex-col--center")
			h1 { data.title } 
		div(class="flex-col wrapper base-width")
			+each('data.blocks as company')
				div(class="company-info")
					Company(imagePath="{company.identifier}" title="{company.companyName}" content="{company.content}")
</template>

<style lang="scss">
	h1 {
		margin-bottom: 32px;
	}

	section {
		background-color: #fff;
	}

	.company-info {
		&:not(:last-of-type) {
			margin-bottom: 48px;
		}
	}

	.wrapper {
		gap: 40px;
	}
</style>
