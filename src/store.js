import { createStore } from 'redux'
import { rootReducer } from './reducer'

// const createStore = (reducer) => {
//   let state
//   const subscribers = []
//   return {
//     dispatch: (action) => {
//       state = reducer(state, action)
//       subscribers.forEach((sub) => sub())
//     },
//     subscribe: (callback) => {
//       subscribers.push(callback)
//     },
//     getState: () => state,
//   }
// }

export const store = createStore(rootReducer)

// store.dispatch({})
