import { AsyncStorage } from 'react-native'

/*
deckInfo = {
  questions: [{Q:"", A:""}, {Q:"", A:""}, ...]
  ansHist: [1, 0, 1, ...]
  deckName: ""
}
*/


export function getAllDeckNames () {
  return AsyncStorage.getAllKeys()
}

export function getDeckInfo (deckName) {
  return AsyncStorage.getItem(deckName).then(
    (res) => JSON.parse(res)
  )
}

export function createNewDeck (deckName) {
  let dummyDeck = {
    questions: [],
    ansHist:[],
    deckName: deckName
  }
  return new Promise((res, rej) => 
      AsyncStorage.setItem(deckName, JSON.stringify(dummyDeck))
        .then(res({[deckName]: dummyDeck})))
}

export function addQuestion (deckName, questionInfo) {
  return getDeckInfo(deckName).then((res) => {
    let deckInfo = res
    deckInfo['questions'].push(questionInfo)
    AsyncStorage.setItem(deckName, JSON.stringify(deckInfo))
  })
}

export function deleteDeck (deckName) {
  return AsyncStorage.removeItem(deckName)
}

export function answerQuestion (deckName, correct) {
  return getDeckInfo(deckName).then((res) => {
    let deckInfo = res
    deckInfo['ansHist'].push(correct)
    AsyncStorage.setItem(deckName, JSON.stringify(deckInfo))
  })
}






