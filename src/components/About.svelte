<script lang="ts">
	import SkillButton from './utils/SkillButton.svelte';
	import Contents from '../contents/contents.json';
	const data = Contents.about;

	const { whoAmI, skills } = data.sections;
</script>

<template lang="pug">
	section(class="flex-col" id="about")
		div(class="wrapper")
			div(class="flex-col")
				h1 { data.title } 
				div(class="divider")
				h2 { data.subtitle }
			div(class="about")
				div(class="about__description")
					h2 {whoAmI.title}
					+each('whoAmI.blocks as block')
						p {block}
				div(class="about__skills")
					h1 { skills.title}
					+each('skills.blocks as block')
						div
							h2 {block.type}
							+each('block.list as skill')
								SkillButton(name="{skill.name}" linkTo="{skill.linkTo}")

</template>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 60%;

		.about {
			display: flex;
			flex-direction: row;
			gap: 3rem;

			.about__description {
				flex: 1;
			}

			.about__skills {
				flex: 1;
			}
		}
	}
</style>
