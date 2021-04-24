<template>
	<div>
		<h2 class="question">{{ prettify(question.question) }}</h2>
		<div class="answers">
			<div
				v-for="(answer, index) in question.answers"
				:key="index"
				@click="handleClick(answer)"
				class="answer"
			>
				<div class="circle">{{ order[index] }}</div>
				{{ prettify(answer) }}
			</div>
		</div>
	</div>
</template>

<script>
const order = ['a', 'b', 'c', 'd'];

export default {
	name: 'QuestionBox',
	emits: ['onAnswer'],
	props: {
		question: Object,
	},
	setup(props, { emit }) {
		// console.log(props.question.correctAnswer);
		const handleClick = (answer) => {
			emit('onAnswer', answer);
		};

		const prettify = (question) => {
			return question.replace(/&....;/gi, ' ');
		};

		return {
			handleClick,
			order,
			prettify,
		};
	},
};
</script>

<style>
.question {
	margin: 30px 0 40px 0;
	font-weight: 500;
	font-size: 20px;
	line-height: 20px;
	color: #494d4e;
}

.answer {
	width: 100%;
	padding: 10px 15px;
	display: flex;
	align-items: center;
	column-gap: 1rem;
	cursor: pointer;
	font-size: 15px;
	margin-bottom: 1rem;
	border-radius: 0.5rem;
	box-shadow: 0px 0px 4px 0px #0000001a;
	transition: 0.5s ease-in-out;
}

.circle {
	border: 2px solid #e5e5e5;
	border-radius: 500px;
	width: 35px;
	height: 35px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 13px;
	transition: 0.5s ease-in-out;
	/* padding: 10px; */
}

.answer:hover .circle {
	background-color: #f33e64;
	color: #fff;
	border: none;
}
</style>
