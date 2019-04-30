import * as api from './api'

async function initDeck1() {
await api.createNewDeck("Geography");
await api.addQuestion("Geography", {Q:"How many countries are there in the world?", O:["~100", "~200", "~300"], A:"~200" })
await api.addQuestion("Geography", {Q:"How long is the great wall of china, in million meter?", O: ["~10", "~20", "~30"], A:"~20"})
return await api.addQuestion("Geography", {Q:"Russia is roughly what times the size of America?", O:["1.5", "2", "2.5"], A:"2"})
}

async function initDeck2() {
await api.createNewDeck("American History");
await api.addQuestion("American History", { Q: "On which year Benjamin Franklin is born?", A: "1705" });
await api.addQuestion("American History", { Q: "On which year Abraham Lincoln did the Gettysburg Address?", A: "1863" });
return await api.addQuestion("American History", { Q: "What is the famous phrase Martin Luther King did in his speech at Civil Rights March 1963?", A: "I have a dream" });
}

export async function init() {
	await initDeck1()
	return await initDeck2()
}
