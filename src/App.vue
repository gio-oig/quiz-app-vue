<template>
	<div class="main">
		<!-- Main Form -->
		<div class="form" v-if="!questions.length">
			<custom-select
				name="difficulty"
				:options="difficultiesList"
				@onSelect="handleSelect"
			/>
			<custom-select
				name="category"
				:options="categoriesList"
				@onSelect="handleSelect"
			/>
			<custom-button text="start" @click="handleStart" />
		</div>
		<!-- End Main Form -->
		<!-- Question Card -->
		<div v-if="questions.length && !isOver" class="question-box">
			<range-bar :current="current + 1" />
			<question-box :question="questions[current]" @onAnswer="nextQuestion" />
		</div>
		<!-- ENd Question Card -->
		<!-- Result -->
		<result
			v-if="isOver && userAnswersLength === 10"
			:correct="correct"
			:incorrect="total - correct"
			@restart="restart"
		/>
	</div>
	<img class="background-svg" src="./assets/back2.svg" alt="" />
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
import { getQuestions } from './services/questions';
import CustomSelect from './components/CustomSelect.vue';

import {
	difficultiesList,
	categoriesList,
	randomizePossitions,
} from './options';
import CustomButton from './components/CustomButton.vue';
import QuestionBox from './components/QuestionBox.vue';
import RangeBar from './components/RangeBar.vue';
import { computed } from '@vue/runtime-core';
import Result from './components/Result.vue';

const TOTAL = 10;

export default {
	name: 'App',
	components: { CustomSelect, CustomButton, QuestionBox, RangeBar, Result },
	setup() {
		const isOver = ref(true);
		const questions = ref([]);
		const question = ref({});
		const userAnswers = ref([]);
		const fetchedQuestions = ref([]);
		const current = ref(0);
		const correctAnswersCount = ref(0);
		const options = reactive({ difficulty: '', category: '' });

		const handleStart = () => {
			fetchQuestions();
			isOver.value = false;
		};

		const handleSelect = ({ field, value }) => {
			options[field] = value;
		};

		const fetchQuestions = async () => {
			fetchedQuestions.value = await getQuestions({
				difficulty: options.difficulty,
				category: options.category,
			});

			filterQuestions();
		};

		const filterQuestions = () => {
			// prettier-ignore
			questions.value = fetchedQuestions.value.map(({question, correct_answer, incorrect_answers }) => {
				return {
					question: question,
					correctAnswer: correct_answer,
					answers: randomizePossitions([...incorrect_answers, correct_answer]),
				};
			});
		};

		const nextQuestion = (answer) => {
			checkAnswer(answer);

			if (checkForEnd()) {
				isOver.value = true;
				return;
			}
			current.value += 1;
		};

		const saveAnswer = (answer) => {
			userAnswers.value.push({
				...questions.value[current.value],
				userAnswer: answer,
			});
		};

		const checkForEnd = () => {
			if (current.value + 1 >= questions.value.length) {
				return true;
			}
		};

		const checkAnswer = (answer) => {
			if (questions.value[current.value].correctAnswer === answer) {
				correctAnswersCount.value += 1;
			}
			saveAnswer(answer);
		};

		const restart = () => {
			questions.value = [];
			userAnswers.value = [];
			correctAnswersCount.value = 0;
			current.value = 0;
			options.difficulty = '';
			options.category = '';
		};

		return {
			difficultiesList,
			categoriesList,
			handleSelect,
			handleStart,
			current,
			questions,
			question,
			nextQuestion,
			isOver,
			userAnswersLength: computed(() => userAnswers.value.length),
			correct: computed(() => correctAnswersCount.value),
			restart,
			total: TOTAL,
		};
	},
};
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

html {
	font-size: 62.5%;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	position: relative;
	overflow: hidden;
	background-color: #5089cc;
	color: #2c3e50;
	z-index: 0;
}

.background-svg {
	position: absolute;
	right: 0;
	bottom: 0;
	width: 60%;
	z-index: -1;
}

.main {
	/* width: 600px; */
	min-height: 200px;
	/* margin: auto; */
	padding: 30px 20px;
	border-radius: 1rem;
	background-color: #fff;
	box-shadow: 0px 2px 27px -8px #0000005e;
}

.form {
	width: 550px;
}

.question-box {
	width: 700px;
}
</style>
