import React, { createContext, useContext} from 'react';
import { useSession } from '../Hooks/sessionHook.js';

export const loginContext = createContext();

export const ContextProvider = ({ children }) => {
    
const {loginUser, logout, getSession, state} = useSession()


    return (
        <loginContext.Provider value={{ state, loginUser, logout, getSession}}>
            {children}
        </loginContext.Provider>
    );
};


export const authenticate = () => useContext(loginContext);
