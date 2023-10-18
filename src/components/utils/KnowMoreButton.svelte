<script lang="ts">
	import { afterNavigate, goto } from '$app/navigation';
	import { page } from '$app/stores';
	import type { NavigationTarget } from '@sveltejs/kit';

	export let name: string;
	export let linkTo: string;

	let lastPage: NavigationTarget | null;

	afterNavigate(({ from }) => {
		lastPage = from;
	});

	const onClick = () => {
		if (linkTo === '%back%') {
			if (lastPage?.url.origin === $page.url.origin) {
				goto(lastPage.url.href);
			} else {
				goto($page.url.origin);
			}
			return;
		}
		if (linkTo.startsWith('http')) {
			window.open(linkTo, '_blank');
			return false;
		}
		goto(linkTo);
	};
</script>

<template lang="pug">
    button(on:click!="{onClick}") { name }
</template>

<style lang="scss">
	button {
		box-sizing: border-box;
		appearance: none;
		background-color: transparent;
		border: 2px solid #bbb;
		border-radius: 0.6em;
		color: #bbb;
		cursor: pointer;
		display: flex;
		align-self: center;
		font-size: 1rem;
		font-weight: 400;
		line-height: 1;
		margin: 20px;
		padding: 1em 2em;
		text-decoration: none;
		text-align: center;
		text-transform: uppercase;
		font-weight: 700;
		transition: box-shadow 300ms ease-out, color 300ms ease-out;

		&:hover,
		&:focus {
			color: #222;
			outline: 0;
		}

		&:hover {
			box-shadow: 0 0 40px 40px #bbb inset;
		}
	}
</style>
