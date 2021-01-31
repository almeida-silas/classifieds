import { call, put } from 'redux-saga/effects'

import api from '../../../services/api'
import { loadSuccess, loadFailure } from './actions'

// eslint-disable-next-line
export function* load() {
  try {
    const response = yield call(api.get, '/')

    yield put(loadSuccess(response))
  } catch (err) {
    yield put(loadFailure())
  }
}
