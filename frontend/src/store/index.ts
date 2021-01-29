import { createStore, Store } from 'redux'

import { ClassifiedsState } from './ducks/classifieds/types'
import rootReducer from './ducks/rootReducer'

export interface ApplicationState {
  classifieds: ClassifiedsState
}

const store: Store<ApplicationState> = createStore(rootReducer)

export default store
