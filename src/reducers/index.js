// тут стор и корневой редьюсер

// combine reducer обьеденяет все редьюсеры которые хранятся в приложении
import { combineReducers } from 'redux'
// apply middleware подключает redux thunk
import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import reposReducer from './reposReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  repos: reposReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
