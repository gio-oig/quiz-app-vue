<template>
	<div id="question-result" :style="style">
		<h3 class="quest" @click="opened = !opened">
			<p style="margin-right: 20px">
				{{ prettify(question.question) }}
			</p>
		</h3>
		<div class="results" v-if="opened">
			<p>correct: {{ prettify(question.userAnswer) }}</p>
			<p>your answer: {{ prettify(question.correctAnswer) }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'QuestionResult',
	props: {
		question: Object,
	},
	data() {
		return {
			opened: false,
			style: {
				background:
					this.question.correctAnswer === this.question.userAnswer
						? '#46ccd9'
						: '#d946ca',
			},
		};
	},
	methods: {
		prettify(val) {
			return val.replace(/&....;/gi, '');
		},
	},
};
</script>

<style scoped>
#question-result {
	margin: 10px 0;
	padding: 10px 0 10px 10px;
	color: rgb(247, 247, 247);
	/* background-color: rgb(228, 228, 228); */
	/* border: 1px solid rgb(211, 211, 211); */
	border-radius: 5px;
}

.quest {
	background-image: url('../assets/drop.svg');
	background-repeat: no-repeat, repeat;
	background-position: right 0.7em top 50%, 0 0;
	background-size: 0.65em auto, 100%;
	font-size: 15px;
	cursor: pointer;
}

.results {
	margin: 5px 0;
	font-size: 15px;
}

.wrong {
	background: #d946ca;
}

.correct {
	background: #46ccd9;
}
</style>
