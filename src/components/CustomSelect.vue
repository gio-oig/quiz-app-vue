<template>
	<div class="form-controll">
		<label :for="name">{{ name }}</label>
		<select :name="name" :id="name" @change="handleClick">
			<option value="">Any</option>
			<template v-if="name === 'category'">
				<!-- [{ option: 'General Knowledge', value: 9 }], -->
				<option
					v-for="{ option, value } in options"
					:value="value"
					:key="value"
					>{{ option }}</option
				>
			</template>
			<template v-else>
				<option v-for="{ option } in options" :value="option" :key="option">{{
					option
				}}</option>
			</template>
		</select>
	</div>
</template>

<script>
export default {
	name: 'CustomSelect',
	emits: ['onSelect'],
	props: {
		name: String,
		options: Array,
	},
	methods: {
		handleClick(e) {
			const field = e.target.name;
			const value = e.target.value;
			this.$emit('onSelect', { field, value: value });
		},
	},
};
</script>

<style>
.form-controll {
	margin-bottom: 2rem;
}

label {
	display: inline-block;
	margin-bottom: 0.7rem;
	font-size: 1.6rem;
	font-weight: 600;
	text-transform: capitalize;
}

select {
	/* appearance: none;
	background-color: transparent;
	border: none;
	padding: 0 1em 0 0;
	margin: 0;
	width: 100%;
	font-family: inherit;
	font-size: inherit;
	cursor: inherit;
	line-height: inherit;

	z-index: 1;

	outline: none; */
	display: block;
	width: 100%;
	height: 5rem;
	border: none;
	border-radius: 1rem;
	color: var(--dark-blue);
	font-size: 1.5rem;
	padding-left: 1rem;

	-moz-appearance: none;
	-webkit-appearance: none;
	outline: none;
	appearance: none;
	background-color: rgb(236, 236, 236);
	background-image: url('../assets/drop.svg');
	background-repeat: no-repeat, repeat;
	background-position: right 0.7em top 50%, 0 0;
	background-size: 0.65em auto, 100%;
}
</style>
