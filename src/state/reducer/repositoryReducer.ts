
interface RepositoryState {
    loading: boolean,
    error: string | null,
    data: string[]
}

enum ActionType {
    SEARCH_REPOSITORY = "search_repository",
    SEARCH_REPOSITORY_SUCCESS = "search_repository_success",
    SEARCH_REPOSITORY_ERROR = "search_repository_error"

}

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

type Action = SearchReposityAction | SearchRepositySuccessAction | SearchReposityErrorAction

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