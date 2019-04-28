import * as api from './api'

function initDeck1 () {
	return api.createNewDeck("Geography")
	.then(() => api.addQuestion("Geography", {Q:"How many countries are there in the world?", O:["~100", "~200", "~300"], A:"~200" })
	).then(() => api.addQuestion("Geography", {Q:"How long is the great wall of china, in million meter?", O: ["~10", "~20", "~30"], A:"~20"})
	).then(() => api.addQuestion("Geography", {Q:"Russia is roughly what times the size of America?", O:["1.5", "2", "2.5"], A:"2"})
	)
}

function initDeck2 () {
	return api.createNewDeck("American History")
	.then(() => api.addQuestion("American History", {Q:"On which year Benjamin Franklin is born?", O:["~1650", "~1700", "~1750"], A:"~1700"})
	).then(() => api.addQuestion("American History", {Q:"On which year Abraham Lincoln did the Gettysburg Address?", O:["~1750", "~1800", "~1850"], A:"1863"})
	).then(() => api.addQuestion("American History", {Q:"What is the famous phrase Martin Luther King did in his speech at Civil Rights March 1963?", O:["I have a pen", "I have a dollar", "I have a dream"], A:"I have a dream"})
	)
}

export function init() {
	return initDeck1().then(
			() => initDeck2()
		)
}
