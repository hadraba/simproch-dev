<script lang="ts">
	import Company from './utils/Company.svelte';
</script>

<template lang="pug">
    section
        div(class="wrapper")
            Company(imagePath="level-works" title="Level.works" content="Level.works is a Rotterdam based company that connects flexible workers (freelancers) with companies. During my stay here, I've leveraged React, React Native, Some other shit and a bunch of other items that I need to write here")
            Company(imagePath="logex-solution-centre" title="LOGEX Solution Centre" content="LOGEX is an Amsterdam based company that helps medical facilities get insight into their data. During my stay, I've been part of a company that has grown from 40 people across 2 countries to 300 people across 6 countries. I've been responsible for technical leadership of a product, as well as developing internal framework used by 60 developers, and I've helped the company with rebranding their product twice.")
            Company(imagePath="green-fox-academy" title="Green Fox Academy" content="Green Fox Academy is a hungarian company with a branch office in Czechia. When I was mentoring here, I was one of very few mentors whose students had 100 % success when finishing their final exams, as well as receiving their jobs within 2 weeks of finishing the bootcamp.")
</template>

<style lang="scss">
	section {
		background-color: rgb(240, 240, 240);
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.wrapper {
		display: flex;
		flex-direction: column;
		gap: 40px;
		width: 50%;
	}
</style>
