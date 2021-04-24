<template>
	<div class="range-container">
		<div class="range">
			<div class="range-line" :style="{ width: percent + '%' }"></div>
		</div>
		<div class="done">{{ percent }}%</div>
	</div>
</template>

<script>
import { computed } from '@vue/runtime-core';
export default {
	name: 'RangeBox',
	props: {
		current: Number,
	},
	setup(props) {
		return {
			percent: computed(() => (props.current * 100) / 10),
		};
	},
};
</script>

<style scoped>
.range-container {
	display: flex;
	align-items: center;
}

.range {
	position: relative;
	width: 30rem;
	height: 10px;
	background-color: #e5e5e5;
	border-radius: 10px;
	overflow: hidden;
}
.range-line {
	position: absolute;
	width: 20%;
	height: 10px;
	left: 0;
	background-color: #f33e63;
	border-radius: 10px;
	transition: 0.5s ease-in-out;
}

.done {
	font-size: 12px;
	margin-left: 1rem;
}
</style>
