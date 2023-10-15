<script lang="ts">
	import SkillButton from './utils/SkillButton.svelte';
	type Skill = { name: string; linkTo: string };
	const skills: Skill[] = [
		{ name: 'Angular', linkTo: 'https://angular.io/' },
		{ name: 'CSS', linkTo: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
		{ name: 'Cypress', linkTo: 'https://www.cypress.io/' },
		{ name: '.NET Core', linkTo: 'https://learn.microsoft.com/en-us/dotnet/core/introduction' },
		{ name: 'expressjs', linkTo: 'https://expressjs.com/' },
		{ name: 'Git', linkTo: 'https://git-scm.com/' },
		{ name: 'HTML', linkTo: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
		{ name: 'JavaScript', linkTo: 'https://www.ecma-international.org/' },
		{ name: 'Jest', linkTo: 'https://jestjs.io/' },
		{ name: 'Nest JS', linkTo: 'https://nestjs.com/' },
		{ name: 'Node.JS', linkTo: 'https://nodejs.org/en' },
		{ name: 'React', linkTo: 'https://react.dev/' },
		{ name: 'react-native', linkTo: 'https://reactnative.dev/' },
		{ name: 'RxJS', linkTo: 'https://rxjs.dev/' },
		{ name: 'Sass', linkTo: 'https://sass-lang.com/' },
		{ name: 'TypeScript', linkTo: 'https://www.typescriptlang.org/' }
	];

	const databaseTools: Skill[] = [
		{ name: 'WebScale', linkTo: 'https://www.mongodb.com/' },
		{ name: 'MS-SQL', linkTo: 'https://www.microsoft.com/en-us/sql-server' },
		{ name: 'MySQL', linkTo: 'https://www.mysql.com/' },
		{ name: 'Prisma', linkTo: 'https://www.prisma.io/' },
		{ name: 'TypeORM', linkTo: 'https://typeorm.io/' }
	];

	const otherTools: Skill[] = [
		{ name: 'Atlassian tools', linkTo: 'https://www.atlassian.com/' },
		{ name: 'AWS', linkTo: 'https://aws.amazon.com/' },
		{ name: 'CircleCI', linkTo: 'https://circleci.com/' },
		{ name: 'Cucumber', linkTo: 'https://cucumber.io/' },
		{ name: 'GitHub', linkTo: 'https://github.com/' },
		{ name: 'Microsoft Azure', linkTo: 'https://azure.microsoft.com/en-us' },
		{ name: 'Miro', linkTo: 'https://miro.com/' },
		{ name: 'Netlify', linkTo: 'https://www.netlify.com/' },
		{ name: 'Notion', linkTo: 'https://www.notion.so/' }
	];
</script>

<template lang="pug">
    section(class="flex-col")
        div(class="wrapper")
            div(class="flex-col")
                h1 About me
                div(class="divider")
                h2 Here you can find additional stuff before I come up with better text
            div(class="about")
                div(class="about__description")
                    h2 Who am I?
                    p.
                        I'm a #[b full stack developer]. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. In dapibus augue non sapien. Aliquam id dolor. Nulla pulvinar eleifend sem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum.
                    p.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. In dapibus augue non sapien. Aliquam id dolor. Nulla pulvinar eleifend sem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum.
                    p.
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat. In sem justo, commodo ut, suscipit at, pharetra vitae, orci. In dapibus augue non sapien. Aliquam id dolor. Nulla pulvinar eleifend sem. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cras elementum.
                div(class="about__skills")
                    h1 Skills
                    div
                        h2 Skills
                        +each('skills as skill')
                            SkillButton(name="{skill.name}" linkTo="{skill.linkTo}")
                    div
                        h2 Skills
                        +each('databaseTools as skill')
                            SkillButton(name="{skill.name}" linkTo="{skill.linkTo}")
                    div
                        h2 Skills
                        +each('otherTools as skill')
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
