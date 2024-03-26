import React, {createContext, useState} from "react";

//create a new context
export const AuthContext = createContext();

//create a provider component
export const AuthProvider = ({ children }) => {
    //state to manage authentication status and username
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [ username, setUsername ] = useState('');

    //function to set authentication state
    const setAuthStatus = (status, user) => {
        setIsAuthenticated(status);
        setUsername(user);
    };

    //value object to be provided by the context
    const authContextValue = {
        isAuthenticated,
        username,
        setAuthStatus
    };
     
    //provide the value to the context
    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    )
}