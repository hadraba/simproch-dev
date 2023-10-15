<script lang="ts">
	import MouseIndicator from './MouseIndicator.svelte';
</script>

<template lang="pug">
    section(class="home")
        div(class="home__title")
            h1 Hi, I'm Simon.
            h2 I'm a full stack developer who does shit for funks
        div(class="home__mouse")
            MouseIndicator
</template>

<style lang="scss">
	.home {
		background-color: rgb(240, 240, 240);
        display: flex;
        flex-direction: column;
        align-items: center;
        
		.home__title {
            margin-top:auto;
            display: flex;
            flex-direction: column;
            align-items: center;
		}

		.home__mouse {
			margin-top: auto;
            margin-bottom: 2rem;
		}
	}
</style>
