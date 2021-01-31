import { createStore, applyMiddleware, Store } from 'redux'

import createSagaMiddleware from 'redux-saga'

import { ClassifiedsState } from './ducks/classifieds/types'
import rootReducer from './ducks/rootReducer'
import rootSaga from './ducks/rootSaga'

export interface ApplicationState {
  classifieds: ClassifiedsState
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store
