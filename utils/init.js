import * as api from './api'

function initDeck1 () {
	return api.createNewDeck("Geography")
	.then(() => api.addQuestion("Geography", {Q:"How many countries are there in the world?", A:"195"})
	).then(() => api.addQuestion("Geography", {Q:"How long is the great wall of china, in million meter?", A:"21"})
	).then(() => api.addQuestion("Geography", {Q:"Russia is roughly what times the size of America?", A:"2"})
	)
}

function initDeck2 () {
	return api.createNewDeck("American History")
	.then(() => api.addQuestion("American History", {Q:"On which year Benjamin Franklin is born?", A:"1705"})
	).then(() => api.addQuestion("American History", {Q:"On which year Abraham Lincoln did the Gettysburg Address?", A:"1863"})
	).then(() => api.addQuestion("American History", {Q:"What is the famous phrase Martin Luther King did in his speech at Civil Rights March 1963?", A:"I have a dream"})
	)
}

export function init() {
	return initDeck1().then(
			() => initDeck2()
		)
}
