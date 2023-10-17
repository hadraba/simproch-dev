<script lang="ts">
	import KnowMoreButton from './KnowMoreButton.svelte';
	import SkillButton from './SkillButton.svelte';

	type DataType = {
		overview: {
			title: string;
			textBlocks: string[];
		};
		skills: {
			title: string;
			skills: { name: string; linkTo: string }[];
		};
		actions: {
			name: string;
			linkTo: '%back%' | string;
		}[];
	};

	export let data: DataType;
</script>

<template lang="pug">
    section(class="flex-col flex-col--center wrapper")
        div(class="base-width flex-col")
            div(class="flex-col overview")
                h2 {data.overview.title}
                div(class="overview__text")
                    +each('data.overview.textBlocks as textBlock')
                        p {textBlock}

            div(class="flex-col skills")
                h2 {data.skills.title}
                div(class="skill__list")
                    +each('data.skills.skills as skill')
                        SkillButton(name="{skill.name}" linkTo="{skill.linkTo}")
            
            div(class="flex-row")
                +each('data.actions as action')
                    KnowMoreButton(name="{action.name}" linkTo="{action.linkTo}")
</template>

<style lang="scss">
	section {
		background-color: rgb(240, 240, 240);
	}

	h2 {
		margin-bottom: 12px;
	}

	.overview__text {
		margin-bottom: 20px;
	}

	.skills {
		margin-bottom: 24px;
		.skill__list {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
		}
	}
</style>
