<script lang="ts">
	import Contents from '../contents/contents.json';
	import DynamicIcon from './utils/DynamicIcon.svelte';
	const data = Contents.footer;
</script>

<template lang="pug">
	footer(class="flex-col flex-col--center" id="footer")
		div(class="about flex-row")
			div(class="about__me")
				div(class="about__me__title") {data.title}
				div(class="about__me__description") {data.subtitle}
			div(class="about__socials flex-col")
				div(class="about__socials__title") Socials
				div(class="about__socials__icons flex-row")
					DynamicIcon(name="github-white" linkTo="https://github.com/SimProch")
					DynamicIcon(name="linkedin-white.ico" linkTo="https://www.linkedin.com/in/simon-prochazka-profile/")
		div(class="footer-divider")
		div(class="copyright") &copy; Copyright {new Date().getFullYear()}. Made by #[a(href="/" target="_blank") Simon Prochazka]. Logo by #[a(href="https://www.hadraba.com/" target="_blank") Adam Hadraba].
</template>

<style lang="scss">
	footer {
		background-color: #111;
		height: 30vh;
		color: white;
		padding: 0 25%;
		justify-content: center;
	}

	.about {
		height: 20%;
		justify-content: space-between;
		width: 100%;

		.about__me {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.about__me__title {
				font-size: 1.5rem;
			}

			.about__me__description {
				font-size: 1rem;
			}
		}

		.about__socials {
			font-size: 1.3rem;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.about__socials__icons {
				gap: 8px;
			}
		}
	}

	.footer-divider {
		width: 100%;
		height: 4px;
		background-color: #eee;
		margin: 1rem 0;
	}

	.copyright {
		width: 100%;
		a {
			text-decoration: none;
			color: white;
		}
	}
</style>
