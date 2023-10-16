<script lang="ts">
	import Company from './utils/Company.svelte';
	import Contents from '../contents/contents.json';
	const data = Contents.experience;
</script>

<template lang="pug">
	section(id="experience")
		div(class="wrapper")
			+each('data as company')
				Company(imagePath="{company.identifier}" title="{company.companyName}" content="{company.content}")
</template>

<style lang="scss">
	section {
		background-color: rgb(240, 240, 240);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 40px;
		width: 50%;
	}
</style>
