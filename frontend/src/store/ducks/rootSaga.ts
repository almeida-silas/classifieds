import { all, takeLatest } from 'redux-saga/effects'

import { ClassifiedsTypes } from './classifieds/types'
import { load } from './classifieds/sagas'

export default function* rootSaga(): Generator {
  return yield all([takeLatest(ClassifiedsTypes.LOAD_REQUEST, load)])
}
