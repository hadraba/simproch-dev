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

	:global(html) {
		scroll-behavior: smooth;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(section) {
		padding-bottom: 10vh;
		padding-top: 10vh;
		min-height: 100vh;
	}

	:global(h1) {
		font-size: 3rem;
	}

	:global(h2) {
		font-size: 2rem;
		font-weight: 500;
	}

	:global(h1, h2, h3, h4, h5, h6, p) {
		margin-block: 0;
		line-height: 1.5;
	}

	:global(ul) {
		list-style-type: none;
		margin-block: 0;
		margin-inline: 0;
		padding-inline: 0;
	}

	:global(p) {
		margin-top: 16px;
		margin-bottom: 16px;
	}

	:global(.divider) {
		height: 8px;
		width: 30px;
		border-radius: 8px;
		background-color: #888;
		align-self: center;
		justify-self: center;
		margin: 4px 0;
	}

	:global(.flex-row) {
		display: flex;
		flex-direction: row;

		@media (max-width: 780px) {
			flex-direction: column;
		}
	}

	:global(.flex-col) {
		display: flex;
		flex-direction: column;
	}

	:global(.flex-col.flex-col--center) {
		align-items: center;
	}

	:global(.base-width) {
		width: 50%;

		@media (max-width: 780px) {
			width: 80%;
		}
	}

	:global(.base-width.base-width--wider) {
		width: 60%;

		@media (max-width: 780px) {
			width: 80%;
		}
	}
</style>
