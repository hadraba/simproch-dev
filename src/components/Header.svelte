<script lang="ts">
	import { page } from '$app/stores';
	import DynamicIcon from './DynamicIcon.svelte';
	let path: string;
	const nav = ['Home', 'About Me', 'Blog'].map((i) => i.toUpperCase());
	const routes = ['home', 'about-me', 'blog'];

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
				+each('routes as route, index')
					a(href="/{route}" class="route") 
						+if('path === route')
							span(class="route__active") {nav[index]}
							+else()
								span {nav[index]}

			div(class="flex")
				a(href="https://github.com/SimProch" class="text-sm font-semibold leading-6 text-gray-900" target="_blank")
					DynamicIcon(name="github" type="large")
</template>

<style lang="scss">
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
