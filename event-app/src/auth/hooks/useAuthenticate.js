import { authTypes } from "../types/authTypes";

export const useAuthenticate = (dispatch) => {
    

    //login
    const login = ({ email, password }) => {
        const action = {
            type: authTypes.login,
            payload: { email, password },
        };

        dispatch(action);
    }

    //logout
    const logout = () => {
        const action = {
            type: authTypes.logout,
        };

        dispatch(action);
    }

    return {login, logout};
}