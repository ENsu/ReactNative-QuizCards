import { AsyncStorage } from 'react-native'

/*
deckInfo = {
  questions: [{Q:"", A:""}, {Q:"", A:""}, ...]
  ansHist: [1, 0, 1, ...]
  deckName: ""
}
*/

export function createNewDeck (deckName) {
  let dummyDeck = {
    questions: [],
    ansHist:[],
    deckName: deckName
  }
  return AsyncStorage.setItem(deckName, JSON.stringify(dummyDeck))
}

export function addQuestion (deckName, Question) {
  return getDeckInfo(deckName).then((res) => {
    let deckInfo = JSON.parse(res)
    deckInfo['questions'].push(Question)
    AsyncStorage.setItem(deckName, JSON.stringify(deckInfo))
  })
}

export function getAllDeckNames () {
  return AsyncStorage.getAllKeys()
}

export function getDeckInfo (deckName) {
  return AsyncStorage.getItem(deckName).then(
    (res) => JSON.parse(res)
  )
}

/* 
export function getAllDeckInfo () {
  getAllDeckNames().then(
    new Promise.all(
    res.map((deckName) => {
        getDeckInfo(deckName)
    })
  )
}
*/

export function deleteDeck (deckName) {
  return AsyncStorage.removeItem(deckName)
}

export function answerQuestion (deckName, correct) {
  return getDeckInfo(deckName).then((res) => {
    let deckInfo = JSON.parse(res)
    deckInfo['ansHist'].push(correct)
    AsyncStorage.setItem(deckName, JSON.stringify(deckInfo))
  })
}






