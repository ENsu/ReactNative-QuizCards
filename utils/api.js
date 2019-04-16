import { AsyncStorage } from 'react-native'

/*
deckInfo = {
  questions: [questionId:{content:"", answer:""}, questionId:{content:"", answer:""}, ...]
  ansHist: [1, 0, 1, ...]
  deckName: ""
}
*/

export function getAllDecks () {
  return AsyncStorage.getAllKeys()
}


export function createNewDeck (deckName) {
  let dummyDeck = {
    questions: [],
    ansHist:[],
    deckName: deckName
  }
  AsyncStorage.setItem(deckName, JSON.stringify(dummyDeck))
}

export function getDeck(deckName) {
  return AsyncStorage.getItem(deckName)
}

export function deleteDeck(deckName) {
  return AsyncStorage.removeItem(deckName)
}

export function addQuestion (deckName, Question) {
  getDeck(deckName).then((res) => {
    let deckInfo = JSON.parse(res)
    deckInfo['questions'].push(Question)
    AsyncStorage.setItem(deckName, JSON.stringify(deckInfo))
  })
}

export function answerQuestion (deckName, correct) {
  getDeck(deckName).then((res) => {
    let deckInfo = JSON.parse(res)
    deckInfo['ansHist'].push(correct)
    AsyncStorage.setItem(deckName, JSON.stringify(deckInfo))
  })
}






