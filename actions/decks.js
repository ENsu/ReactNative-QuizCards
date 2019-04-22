import { getAllDeckNames, getDeckInfo, createNewDeck } from '../utils/api'

export const arrayToObject = (array) =>
   array.reduce((o, item) => {
     o[item.deckName] = item
     return o
   }, {})

export const GET_DECKS = 'GET_DECKS'
export const ADD_DECK = 'ADD_DECK'

function getDecks (decks) {
    return {
        type: GET_DECKS,
        decks: decks
    }
}

function addDeck (deckInfo) {
    return {
        type: ADD_DECK,
        deckInfo: deckInfo
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

export function handleAddDeck (deckName) {
    return (dispatch) => {
        return createNewDeck(deckName)
            .then((deckInfo) => {
                console.log("check point")
                console.log(deckInfo)
                dispatch(addDeck(deckInfo))
            })
    }
}
