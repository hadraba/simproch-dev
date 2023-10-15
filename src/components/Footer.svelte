<template lang="pug">
	footer
		div(class="about")
			div(class="about__me")
				div(class="about__me__title") Simon Prochazka
				div(class="about__me__description") I'm a full stack developer who does shit for funks
			div(class="about__socials")
				div(class="about__socials__title") Socials
				div(class="about__socials__icons")
					div WH
					div AT
					div EV
					div ER
		div(class="footer-divider")
		div(class="copyright") &copy; Copyright {new Date().getFullYear()}. Made by #[a(href="/" target="_blank") Simon Prochazka]. Logo by #[a(href="https://www.hadraba.com/" target="_blank") Adam Hadraba].
</template>

<style lang="scss">
	footer {
		background-color: black;
		color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.about {
		width: 50%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 2rem;

		.about__socials {
			display: flex;
			flex-direction: column;

			.about__socials__icons {
				display: flex;
				flex-direction: row;
				gap: 4px;
			}
		}
	}

	.footer-divider {
		width: 50%;
		height: 4px;
		background-color: #eee;
		margin: 1rem 0;
	}

	.copyright {
		width: 50%;
	}
</style>
