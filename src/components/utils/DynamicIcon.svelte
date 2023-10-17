<script lang="ts">
	type AvailableIcons =
		| 'angular'
		| 'aws'
		| 'circleci'
		| 'cucumber'
		| 'dot-net'
		| 'expressjs'
		| 'git'
		| 'github'
		| 'github-white'
		| 'jest'
		| 'jira'
		| 'microsoft-azure'
		| 'ms-sql'
		| 'mysql'
		| 'nestjs'
		| 'nodejs'
		| 'notion'
		| 'reactjs'
		| 'sass'
		| 'svelte'
		| 'typescript'
		| 'icon-close'
		| 'icon-menu'
		| 'icon-external-window'
		| 'linkedin-white';

	export let type: 'large' | 'small' | 'mini' = 'small';
	export let name: AvailableIcons;
	export let linkTo: string | undefined;
</script>

{#if linkTo}
	<a href={linkTo} target="_blank" class={type}>
		<img
			src={`/images/icons/${name.includes('.') ? name : `${name}.svg`}`}
			class={type}
			alt={`${name} logo`}
		/>
	</a>
{:else}
	<img src={`/images/icons/${name}.svg`} class={type} alt={`${name} logo`} />
{/if}

<style lang="scss">
	.large {
		width: 36px;
		height: 36px;
	}

	.small {
		width: 24px;
		height: 24px;
	}

	.mini {
		width: 16px;
		height: 16px;
	}
</style>
