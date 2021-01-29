export enum ClassifiedsTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE'
}

export interface Classifieds {
  id: number
  title: string
  description: string
  date: Date
}

export interface ClassifiedsState {
  readonly data: Classifieds[]
  readonly loading: boolean
  readonly error: boolean
}
