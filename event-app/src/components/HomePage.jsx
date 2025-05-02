import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Link } from 'react-router-dom';

export const HomePage = () => {

const { user } = useContext(UserContext);

    return (
        <div>
            <h1>Home Page</h1>
            <h3> User Information: </h3>
            <span>Name: { user.name } </span>
            <span>Email: { user.email } </span>
            <Link to="/login">Ir a Login</Link>
        </div>
    );
};