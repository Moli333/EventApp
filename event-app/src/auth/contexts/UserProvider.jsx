import { useState } from 'react';
import { UserContext } from './UserContext';

export const UserProvider = ({children }) => {

    const [user, setUser] = useState({
        id: 1,
        name: 'Nombre del usuario',
});

    return (
        <UserContext.Provider value={{ user, setUser }}>
        {children}
        </UserContext.Provider>
    );
};