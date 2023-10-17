<script lang="ts">
	import { page } from '$app/stores';
	import DynamicIcon from './utils/DynamicIcon.svelte';
	const nav: Array<{ path: string; name: string }> = [
		{ path: 'home', name: 'Home' },
		{ path: 'about', name: 'About' },
		{ path: 'experience', name: 'Experience' },
		{ path: 'footer', name: 'Contact' },
		{ path: 'https://blog.simproch.dev/', name: 'Blog' }
	];

	let isMenuVisible = false;

	const toggleMenu = (event: PointerEvent | KeyboardEvent) => {
		if (event instanceof KeyboardEvent) {
			if (event.key === 'Enter') {
				isMenuVisible = !isMenuVisible;
			}
			return;
		}
		isMenuVisible = !isMenuVisible;
	};

	const getHref = (id: string) => {
		if (id === 'home') return './';
		if (id.startsWith('https')) return id;
		return `./#${id}`;
	};
</script>

<template lang="pug">
	header(class="flex-col")
		div(class="header-bar")
			div(class="header-bar__logo-wrapper")
				a(href="/")
					img(src="/images/logo.png" class="header-bar__logo-wrapper__logo" alt="SimProch logo")
					
			nav(class="header-bar__navigation")
				div(class="header-bar__navigation__routes header-bar__navigation__routes--desktop")
					+each('nav as route, index')
						a(href="{getHref(route.path)}" target="{route.path.startsWith('https') ? '_blank' : ''}" class="header-bar__navigation__routes__route" tabindex="0")
							span {route.name}
								+if('route.name === "Blog"')
									DynamicIcon(name="icon-external-window" type="mini")
				
				div(class="header-bar__navigation__routes header-bar__navigation__routes--mobile")
					div(class="header-bar__navigation__routes__hamburger" role="link" tabindex="0" on:keyup|preventDefault!="{toggleMenu}" on:click|preventDefault!="{toggleMenu}"  class:header-bar__navigation__routes__hamburger--visible="{!isMenuVisible}")
						DynamicIcon(name="icon-menu" )
					div(class="header-bar__navigation__routes__close" role="link" tabindex="0" on:click|preventDefault!="{toggleMenu}" on:keyup|preventDefault!="{toggleMenu}" class:header-bar__navigation__routes__close--visible="{isMenuVisible}")
						DynamicIcon(name="icon-close" type="large")
					div(class="header-bar__navigation__routes__list" class:header-bar__navigation__routes__list--visible="{isMenuVisible}")
						ul
							+each('nav as route, index')
								li
									a(href="{getHref(route.path)}" target="{route.path.startsWith('https') ? '_blank' : ''}" tabindex="0" on:click!="{() => isMenuVisible = !isMenuVisible}")
										span {route.name}
										+if('route.name === "Blog"')
											DynamicIcon(name="icon-external-window" type="mini")
</template>

<style lang="scss">
	header {
		position: sticky;
		top: 0;
		background-color: white;
		border-bottom: 1px solid rgb(240, 240, 240);
		z-index: 1;
		height: 10vh;
		justify-content: center;
		padding: 0 32px 0 24px;

		@media (max-width: 780px) {
			position: relative;
		}
	}

	.header-bar {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		.header-bar__logo-wrapper {
			.header-bar__logo-wrapper__logo {
				width: 50px;
				height: 50px;
			}
		}

		.header-bar__navigation {
			display: flex;
			justify-content: space-between;
			align-items: center;

			@media (max-width: 780px) {
				width: 36px;
				height: 36px;
				justify-content: center;
				align-items: center;
			}

			.header-bar__navigation__routes {
				display: flex;
				flex-direction: row;
				&--desktop {
					@media (max-width: 780px) {
						display: none;
					}

					.header-bar__navigation__routes__route {
						margin-left: 2rem;
						text-decoration: none;
						color: #000;
						opacity: 0.45;
						font-weight: 500;
						line-height: 1.5;
						font-size: 1.3rem;
						display: flex;
						flex-direction: row;

						span {
							display: flex;
						}

						&:hover {
							opacity: 0.65;
						}

						&:first-child {
							margin-left: 0px;
						}
					}
				}

				&--mobile {
					display: none;

					@media (max-width: 780px) {
						display: flex;

						.header-bar__navigation__routes__hamburger,
						.header-bar__navigation__routes__close {
							display: none;
							cursor: pointer;

							&--visible {
								display: flex !important;
							}
						}

						.header-bar__navigation__routes__list {
							position: absolute;
							display: none;
							top: 10vh;
							left: 0;
							width: 100vw;
							background-color: #fff;

							&--visible {
								display: block;
							}

							ul {
								display: flex;
								flex-direction: column;

								li {
									width: 100%;
									cursor: pointer;
									border-bottom: 1px solid #ccc;

									&:hover {
										a {
											opacity: 0.65;
										}
									}

									a {
										color: #000;
										opacity: 0.45;
										padding: 8px 20px;
										font-weight: 500;
										line-height: 1.5;
										font-size: 1.3rem;
										text-decoration: none;
										display: block;
										width: 100%;

										display: flex;
										flex-direction: row;

										span {
											display: flex;
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
</style>
