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
		| 'typescript';

	export let type: 'scaled' | 'large' | 'small' = 'small';
	export let name: AvailableIcons;
</script>

<img src={`/images/icons/${name}.svg`} class={type} alt={`${name} logo`} />

<style lang="scss">
	.large {
		width: 36px;
		height: 36px;
	}

	.small {
		width: 24px;
		height: 24px;
	}

	.scaled {
		height: 60px;
	}
</style>
