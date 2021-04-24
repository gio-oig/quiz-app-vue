export const getQuestions = async ({ category, difficulty }) => {
	const responce = await fetch(
		`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`
	);

	const data = await responce.json();
	return data.results;
};
