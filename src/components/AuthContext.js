import React, { createContext, useState, useContext} from "react";

//create the auth context
const AuthContext = createContext();

//Auth provider component
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    const login = (newToken) => {
        setToken(newToken);
    };

    const logout = () => {
        setToken(null);
    };
    if (token) {
        console.log("user logged in: [ TOKEN:",token," ]")
    }
    else {
        console.log("user logged out: [ TOKEN:",token," ]")
    }
    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => useContext(AuthContext)