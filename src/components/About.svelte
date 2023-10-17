<script lang="ts">
	import SkillButton from './utils/SkillButton.svelte';
	import Contents from '../contents/contents.json';
	const data = Contents.about;

	const { whoAmI, skills } = data.sections;
</script>

<template lang="pug">
	section(class="flex-col flex-col--center" id="about")
		div(class="base-width base-width--wider flex-col flex-col--center")
			div(class="flex-col flex-col--center")
				h1 { data.title } 
			div(class="flex-row about")
				div(class="about__description")
					h2 {whoAmI.title}
					+each('whoAmI.blocks as block')
						p {block}
				div(class="about__skills")
					+each('skills.blocks as block')
						div(class="about__skills__block")
							h2 {block.type}
							div(class="about__skills__block__list")
								+each('block.list as skill')
									SkillButton(name="{skill.name}" linkTo="{skill.linkTo}")

</template>

<style lang="scss">
	section {
		background-color: rgb(240, 240, 240);
	}

	h1 {
		margin-bottom: 36px;
	}

	.about {
		gap: 3rem;

		.about__description {
			flex: 1;
		}

		.about__skills {
			flex: 1;

			.about__skills__block {
				&:not(:first-of-type) {
					margin-top: 24px;
				}

				.about__skills__block__list {
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
				}
			}
		}
	}
</style>
