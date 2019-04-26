import { GET_DECKS, ADD_DECK, ADD_QUESTION, DELETE_DECK, UPDATE_HIST, RESET_ANS_HIST } from '../actions/decks'

export default function decks (state={}, action) {
    switch(action.type) {
        case GET_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
        	return {
        		...state,
        		...action.deckInfo
        	}
        case ADD_QUESTION:
            return {
                ...state, 
                [action.deckName]: { 
                    ...state[action.deckName], 
                    questions: [...state[action.deckName].questions, action.questionInfo]
                    }
            }
        case DELETE_DECK:
            delete state[action.deckName]
            return state
        case UPDATE_HIST:
            return {
                ...state,
                [action.deckName]: {
                    ...state[action.deckName],
                    ansHist: [...state[action.deckName].ansHist, action.correct]
                }
            }
        case RESET_ANS_HIST:
            return {
                ...state,
                [action.deckName]: {
                    ...state[action.deckName],
                    ansHist: []
                }    
            }
        default:
            return state
    }
}
