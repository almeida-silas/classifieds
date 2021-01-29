import { Reducer } from 'redux'
import { ClassifiedsState, ClassifiedsTypes } from './types'

const INITIAL_STATE: ClassifiedsState = {
  data: [],
  error: false,
  loading: false
}

const reducer: Reducer<ClassifiedsState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ClassifiedsTypes.LOAD_REQUEST:
      return { ...state, loading: true }

    case ClassifiedsTypes.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data
      }

    case ClassifiedsTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true, data: [] }

    default:
      return state
  }
}

export default reducer
