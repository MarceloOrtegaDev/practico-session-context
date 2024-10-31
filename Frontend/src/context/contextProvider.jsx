import React, { createContext, useContext, useReducer } from 'react';
import { login, logoutUser} from '../services/userService';

export const loginContext = createContext();

export const ContextProvider = ({ children }) => {
    const initialState = {
        user: null,
        isLogged: false
    };

    const reducer = (state, action) => {
            switch (action.type) {
                case "LOGUEADO":
                    return { ...state, user: action.payload, isLogged: true };
                case "DESLOGUEADO":
                    return { ...state, user: null, isLogged: false };
                default:
                    return state;
            }
        };

    const [state, dispatch] = useReducer(reducer, initialState);

    const loginUser = async (email, password) => {
        const response = await login(email, password);
        if (response.ok) {
            dispatch({ type: "LOGUEADO", payload: response });
        } else {
            console.error("Error en el login");
        }
    };

    const logout = async () => {
        try {
            const response = await logoutUser();
            if (response) {
                dispatch({ type: "DESLOGUEADO" });
            }
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };


    return (
        <loginContext.Provider value={{ state, loginUser, logout }}>
            {children}
        </loginContext.Provider>
    );
};

// Ajuste aquí para que `authenticate` no sea async ni use paréntesis
export const authenticate = () => useContext(loginContext);
