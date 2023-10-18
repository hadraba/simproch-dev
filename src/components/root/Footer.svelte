<script lang="ts">
	import Contents from '../../contents/contents.json';
	import DynamicIcon from '../utils/DynamicIcon.svelte';
	const data = Contents.footer;
</script>

<template lang="pug">
	footer(class="flex-col flex-col--center" id="footer")
		div(class="about flex-row")
			div(class="about__me")
				span(class="about__me__title") {data.title}
				span(class="about__me__description") {data.subtitle}
			div(class="about__socials flex-col")
				span(class="about__socials__title") Let's connect through #[a(href="simon.je.teplomrd@prc.com" target="_blank") e-mail] or social media:
				div(class="about__socials__icons flex-row")
					DynamicIcon(name="github-white" linkTo="https://github.com/SimProch")
					DynamicIcon(name="linkedin-white.ico" linkTo="https://www.linkedin.com/in/simon-prochazka-profile/")
		div(class="footer-divider")
		span(class="copyright") &copy; Copyright {new Date().getFullYear()}. Made by #[a(href="/" target="_blank") Simon Prochazka]. Logo by #[a(href="https://www.hadraba.com/" target="_blank") Adam Hadraba].
</template>

<style lang="scss">
	footer {
		background-color: #111;
		color: white;
		padding: 60px 60px 20px 60px;
		justify-content: center;
	}

	.about {
		justify-content: space-between;
		width: 100%;
		gap: 12px;

		@media (max-width: 1120px) {
			flex-direction: column;
			gap: 60px;
		}

		.about__me {
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.about__me__title {
				font-size: 1.5rem;
			}

			.about__me__description {
				font-size: 1.1rem;
				color: rgba(255,255,255,.6);
			}

		}

		.about__socials {
			font-size: 1.5rem;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-end;

			.about__socials__icons {
				padding-top: 10px;
				gap: 20px;
			}

			@media (max-width: 1120px) {
				align-items: flex-start;
			}
		}
	}

	a {
		color: #fff;
		&:hover {
			text-decoration: none;
		}
	}

	.footer-divider {
		width: 100%;
		height: 4px;
		margin-top: 6rem;
	}

	.copyright {
		width: 100%;
		a {
			text-decoration: none;
			color: white;
		}
	}
</style>
