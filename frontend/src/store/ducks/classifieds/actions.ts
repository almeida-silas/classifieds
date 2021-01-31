import { action } from 'typesafe-actions'

import { Classifieds, ClassifiedsTypes } from './types'

export const loadRequest = (): void => {
  action(ClassifiedsTypes.LOAD_REQUEST)
}

export const loadSuccess = (data: Classifieds[]): void => {
  action(ClassifiedsTypes.LOAD_SUCCESS, data)
}

export const loadFailure = (): void => {
  action(ClassifiedsTypes.LOAD_FAILURE)
}
