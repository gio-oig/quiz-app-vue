export const difficultiesList = [
	{ option: 'easy' },
	{ option: 'medium' },
	{ option: 'hard' },
];
export const categoriesList = [
	{ option: 'General Knowledge', value: 9 },
	{ option: 'Entertainment: Books', value: 10 },
	{ option: 'Entertainment: Film', value: 11 },
	{ option: 'Entertainment: Music', value: 12 },
	{ option: 'Entertainment: Musicals &amp; Theatres', value: 13 },
	{ option: 'Entertainment: Television', value: 14 },
	{ option: 'Entertainment: Video Games', value: 15 },
	{ option: 'Entertainment: Board Games', value: 16 },
	{ option: 'Science &amp; Nature', value: 17 },
	{ option: 'Science: Computers', value: 18 },
	{ option: 'Science: Mathematics', value: 19 },
	{ option: 'Mythology', value: 20 },
	{ option: 'Sports', value: 21 },
	{ option: 'Geography', value: 22 },
	{ option: 'History', value: 23 },
	{ option: 'Politics', value: 24 },
	{ option: 'Art', value: 25 },
	{ option: 'Celebrities', value: 26 },
	{ option: 'Animals', value: 27 },
	{ option: 'Vehicles', value: 28 },
	{ option: 'Entertainment: Comics', value: 29 },
	{ option: 'Science: Gadgets', value: 30 },
	{ option: 'Entertainment: Japanese Anime &amp; Manga', value: 31 },
	{ option: 'Entertainment: Cartoon &amp; Animations', value: 32 },
];

export const randomizePossitions = (arr) => {
	return arr.sort(() => Math.random() - 0.5);
};
