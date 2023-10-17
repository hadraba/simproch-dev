<script lang="ts">
	export let name: string;
	export let linkTo: string;
</script>

<template lang="pug">
    a(class="button" href="{linkTo}" target="_blank") {name}
</template>

<style lang="scss">
	.button {
		position: relative;
		display: flex;
		align-items: center;
		margin-top: 4px;
		margin-right: 8px;
		padding: 8px 16px;
		text-align: center;
		font-size: 16px;
		letter-spacing: 1px;
		text-decoration: none;
		color: #999999;
		background: #ffffff;
		border: 2px solid #999999;
		cursor: pointer;
		transition: ease-out 0.5s;
		-webkit-transition: ease-out 0.5s;
		-moz-transition: ease-out 0.5s;

		&::after,
		&::before {
			position: absolute;
			content: '';
			width: 0;
			height: 0;
			transition: 0.5s;
		}

		&::after {
			top: -2px;
			left: -2px;
			border-top: 2px solid transparent;
			border-left: 2px solid transparent;
		}

		&::before {
			bottom: -2px;
			right: -2px;
			border-bottom: 2px solid transparent;
			border-right: 2px solid transparent;
		}

		&:hover {
			color: #222;

			&::after,
			&::before {
				width: calc(50% + 2px);
				height: calc(50% + 2px);
				border-color: #222;
			}
		}
	}
</style>
