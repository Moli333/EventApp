export const authReducer = (state = {}, action = {}) => {
    switch (action.type) {
        case 'authTypes.login':
            return {
                ...state,
                logged: true,
                user: action.payload,
                errorMessage: null
            };
        case 'autTypes.logout':
            return {
                logged: false,
                user: null,
                errorMessage: null
            };
        case 'authTypes.errors':
            return {
                ...state,
                logged: false,
                errorMessage: action.payload
            };

        default:
            return state;
    }
}