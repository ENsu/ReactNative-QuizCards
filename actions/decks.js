import { getAllDeckNames, getDeckInfo } from '../utils/api'

export const arrayToObject = (array) =>
   array.reduce((o, item) => {
     o[item.deckName] = item
     return o
   }, {})

export const GET_DECKS = 'GET_DECKS'

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
            .then((resList) => {
                return dispatch(getDecks(arrayToObject(resList)))
            })
        }
    }
