import { action, Action } from 'typesafe-actions'

import { Classifieds, ClassifiedsTypes } from './types'

export const loadRequest = (): Action => action(ClassifiedsTypes.LOAD_REQUEST)

export const loadSuccess = (data: Classifieds[]): Action =>
  action(ClassifiedsTypes.LOAD_SUCCESS, data)

export const loadFailure = (): Action => action(ClassifiedsTypes.LOAD_FAILURE)
