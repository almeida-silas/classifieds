import { action } from 'typesafe-actions'

import { Classifieds, ClassifiedsTypes } from './types'

export const loadRequest = (): void => {
  action(ClassifiedsTypes.LOAD_FAILURE)
}

export const loadSuccess = (data: Classifieds[]): void => {
  action(ClassifiedsTypes.LOAD_FAILURE, data)
}

export const loadFailure = (): void => {
  action(ClassifiedsTypes.LOAD_FAILURE)
}
