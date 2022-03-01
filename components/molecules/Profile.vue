<template>
	<div class="flex items-center">
		<img src="https://github.com/JeanBauch.png" alt="Jean Bauch" class="mr-6 w-20 h-20 rounded-full" :style="{ minWidth: '5rem' }">
		<div class="flex flex-col w-full">
			<strong class="text-title text-2xl">Jean Bauch</strong>
			<p class="flex items-center">
				<img src="icons/level.svg" alt="level" class="mr-2">
				<span class="text-base">Level {{ level }}</span>
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
	computed: mapState('Challenges', ['level']),
})

</script>
