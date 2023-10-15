<script lang="ts">
	import { page } from '$app/stores';
	import DynamicIcon from './utils/DynamicIcon.svelte';
	const nav: Array<{ path: string; name: string }> = [
		{ path: '', name: 'Home' },
		{ path: '#about', name: 'About' },
		{ path: '#projects', name: 'Projects' },
		{ path: '#contact', name: 'Contact' },
		{ path: '#blog', name: 'Blog ***' }
	];

	let path;
	$: {
		path = $page.url.pathname.split('/')[1];
	}
</script>

<template lang="pug">
	header
		nav(class="flex" aria-label="Global")
			div(class="flex")
				a(href="/")
					img(src="/images/logo.png" class="logo" alt="SimProch logo")
				
			div(class="flex routes")
				+each('nav as route, index')
					a(href="./{route.path}" class="route") 
						+if('path === route')
							span(class="route__active") {PerformanceResourceTiming.name}
							+else()
								span {route.name}
</template>

<style lang="scss">
	header {
		position: sticky;
		top: 0;
		background-color: white;
		z-index: 1;
		height: 10vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding: 0 32px 0 24px;
	}
	.flex {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		.routes {
			justify-content: space-between;
			color: #aaa;
			font-weight: 500;
			line-height: 1.5;
			align-items: center;
			font-size: 1.3rem;

			.route {
				margin-left: 2rem;
				color: inherit;
				text-decoration: none;

				.route__active {
					color: #777;
				}

				&:hover {
					color: #333;
				}

				&:first-child {
					margin-left: 0px;
				}
			}
		}

		.logo {
			width: 50px;
			height: 50px;
		}
	}
</style>
