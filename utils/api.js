import { AsyncStorage } from 'react-native'

/*
deckInfo = {
  questions: [{Q:"", A:""}, {Q:"", A:""}, ...]
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
  return AsyncStorage.setItem(deckName, JSON.stringify(dummyDeck))
}

export function getDeck(deckName) {
  return AsyncStorage.getItem(deckName)
}

export function deleteDeck(deckName) {
  return AsyncStorage.removeItem(deckName)
}

export function addQuestion (deckName, Question) {
  return getDeck(deckName).then((res) => {
    let deckInfo = JSON.parse(res)
    deckInfo['questions'].push(Question)
    AsyncStorage.setItem(deckName, JSON.stringify(deckInfo))
  })
}

export function answerQuestion (deckName, correct) {
  return getDeck(deckName).then((res) => {
    let deckInfo = JSON.parse(res)
    deckInfo['ansHist'].push(correct)
    AsyncStorage.setItem(deckName, JSON.stringify(deckInfo))
  })
}






