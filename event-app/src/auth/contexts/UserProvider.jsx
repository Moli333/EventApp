import { useReducer } from 'react';
import { UserContext } from './UserContext';
import { authReducer } from '../reducers/authReducer';

import { useAuthenticate } from '../hooks/useAuthenticate';

const authInitialState = {
logged: false,
user: null,
errorMessage: null,
};

export const UserProvider = ({children }) => {

    const [userState, dispatch] = useReducer(authReducer, authInitialState);
    const {login, logout} = useAuthenticate(dispatch);

    return (
        <UserContext.Provider value={{ userState, login, logout }}>
        {children}
        </UserContext.Provider>
    );
};