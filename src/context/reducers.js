export const reducers = (state, action) => {
    switch (action.type) {
        case "GET_POSTS":
            return {
                ...state,
                posts: action.getPosts,
                loading: false,
            }
        default:
            return state
    }
}