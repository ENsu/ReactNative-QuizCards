import { getAllDeckNames, getDeckInfo, createNewDeck, addQuestion, deleteDeck } from '../utils/api'

export const GET_DECKS = 'GET_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'
export const DELETE_DECK = 'DELETE_DECK'


export const arrayToObject = (array) =>
   array.reduce((o, item) => {
     o[item.deckName] = item
     return o
   }, {})


function getDecks (decks) {
    return {
        type: GET_DECKS,
        decks: decks
    }
}

export function handleGetDecks (info) {
    return (dispatch) => {
        return getAllDeckNames()
            .then((decks) => new Promise.all(
                decks.map((deck) => getDeckInfo(deck))
            ))
            .then((resList) => dispatch(getDecks(arrayToObject(resList))))
        }
    }


function addDeck (deckInfo) {
    return {
        type: ADD_DECK,
        deckInfo: deckInfo
    }
}

export function handleAddDeck (deckName) {
    return (dispatch) => {
        return createNewDeck(deckName)
            .then((deckInfo) => {
                dispatch(addDeck(deckInfo))
            })
    }
}

function deleteDeckAction (deckName) {
    return {
        type: DELETE_DECK,
        deckName: deckName
    }
}

export function handleDeleteDeck (deckName) {
    return (dispatch) => {
        return deleteDeck(deckName)
            .then(() => {
                dispatch(deleteDeckAction(deckName))
            })
    }
}

function addQuestionAction (deckName, questionInfo) {
    return {
        type: ADD_QUESTION,
        deckName: deckName,
        questionInfo: questionInfo
    }
}

export function handleAddQuestion (deckName, questionInfo) {
    return (dispatch) => {
        return addQuestion(deckName, questionInfo)
            .then(() => {
                dispatch(addQuestionAction(deckName, questionInfo))
            })
    }
}


