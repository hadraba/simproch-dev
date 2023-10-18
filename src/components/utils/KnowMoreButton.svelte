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
	@import '../../variables.scss';

	button {
		position: relative;
		display: flex;
		align-items: center;
		margin-top: 4px;
		margin-right: 4px;
		padding: 8px 16px;
		text-align: center;
		font-size: 1.2rem;
		letter-spacing: 1px;
		text-decoration: none;
		color: rgba(255,255,255,1);
		background: rgba(0,0,0,1);
		border: 4px solid rgba(0,0,0,1);
		cursor: pointer;
		transition: ease-out 0.5s;
		-webkit-transition: ease-out 0.5s;
		-moz-transition: ease-out 0.5s;

		&::after,
		&::before {
			position: absolute;
			content: '';
			width: 0;
			height: 0;
			transition: 0.5s;
		}

		&::after {
			top: -$button-border-size;
			left: -$button-border-size;
			border-top: $button-border-size solid transparent;
			border-left: $button-border-size solid transparent;
		}

		&::before {
			bottom: -$button-border-size;
			right: -$button-border-size;
			border-bottom: $button-border-size solid transparent;
			border-right: $button-border-size solid transparent;
		}

		&:hover {
			color: rgba(255,255,255,1);

			&::after,
			&::before {
				width: calc(100% + $button-border-size);
				height: calc(100% + $button-border-size);
				border-color: rgba(255,255,255,1);
			}
		}
	}
</style>