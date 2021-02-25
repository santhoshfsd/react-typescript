
import { ActionType } from './../action-types'


interface SearchReposityAction {
    type: ActionType.SEARCH_REPOSITORY
}

interface SearchRepositySuccessAction {
    type: ActionType.SEARCH_REPOSITORY_SUCCESS
    payload: string[]
}

interface SearchReposityErrorAction {
    type: ActionType.SEARCH_REPOSITORY_ERROR
    payload: string
}

export type Action = SearchReposityAction | SearchRepositySuccessAction | SearchReposityErrorAction
