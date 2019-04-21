import thunk from 'redux-thunk'
import { applyMiddleware } from 'redux'

const logger = (store) => (next) => (action) => {
    console.group(action.type)
        console.log('The action: ', action)
        const returnValue = next(action)
        console.log("The new state: ", store.getState())
    console.groupEnd()
    return returnValue
}


// thunk to help handle asynchronous API calls during action
export default applyMiddleware(
    thunk,
    logger
)
