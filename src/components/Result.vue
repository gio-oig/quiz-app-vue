<template>
	<div class="result">
		<div class="result-range-container">
			<div class="range">
				<div class="correct-range" :style="{ width: correct + '0%' }"></div>
				<div class="wrong-range" :style="{ width: incorrect + '0%' }"></div>
			</div>
			<div class="result-numbers">
				<p class="correct">CORRECT: {{ correct }}</p>
				<p class="incorrect">INCORRECT: {{ incorrect }}</p>
			</div>
		</div>
		<!-- <button class="restart">restart</button> -->
		<custom-button
			text="restart"
			:style="{ width: '20rem', margin: '2rem 0' }"
			@click="$emit('restart')"
		/>
	</div>
</template>

<script>
import CustomButton from './CustomButton.vue';
export default {
	components: { CustomButton },
	emits: ['restart'],
	name: 'Result',
	props: {
		correct: Number,
		incorrect: Number,
	},
};
</script>

<style scoped>
.result {
	min-width: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	/* justify-content: center; */
}

.result-numbers {
	display: flex;
	justify-content: space-evenly;
	/* column-gap: 20px; */
	font-size: 18px;
	font-weight: 600;
}

/* .result-range-container  */

.range {
	width: 400px;
	position: relative;
	height: 15px;
	overflow: hidden;
	margin-bottom: 15px;
	border-radius: 10px;
}
.correct-range {
	width: 50%;
	position: absolute;
	left: 0;
	height: 100%;
	background: #46ccd9;
}

.wrong-range {
	width: 50%;
	position: absolute;
	right: 0;
	height: 100%;
	background: #d946ca;
}

.restart {
	margin: 20px 0;
	width: 200px;
	padding: 10px;

	font-size: 2rem;
	font-weight: 600;
	color: #fff;

	background-color: #46ccd9;
	border-radius: 10px;
	border: none;
	cursor: pointer;
}

.correct {
	color: #46ccd9;
}
.incorrect {
	color: #d946ca;
}
</style>
