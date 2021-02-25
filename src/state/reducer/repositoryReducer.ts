
import { Action } from './../action'
import { ActionType } from './../action-types'

interface RepositoryState {
    loading: boolean,
    error: string | null,
    data: string[]
}

const reducer = (state: RepositoryState,
    action: Action): RepositoryState => {
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORY:
            return { loading: true, error: null, data: [] }
        case ActionType.SEARCH_REPOSITORY_SUCCESS:
            return { loading: false, error: null, data: action.payload }
        case ActionType.SEARCH_REPOSITORY_ERROR:
            return { loading: false, error: action.payload, data: [] }

        default:
            return state;
    }
};

export default reducer