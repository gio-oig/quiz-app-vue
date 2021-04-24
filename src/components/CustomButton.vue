<template>
	<button class="btn" :style="style">{{ text }}</button>
</template>

<script>
export default {
	name: 'CustomButton',
	props: {
		text: String,
		style: Object,
	},
};
</script>

<style>
.btn {
	width: 100%;
	padding: 10px;
	font-size: 2rem;
	font-weight: 600;
	background-color: #46ccd9;
	border-radius: 5px;
	border: none;
	color: #fff;
	cursor: pointer;
	outline: none;
}

.btn:hover {
	opacity: 0.9;
}
</style>
