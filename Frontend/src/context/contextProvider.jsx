import React from 'react'
import { createContext, useReducer } from 'react'
import { login, logoutUser } from '../services/userService'


export const loginContext = createContext()


export const ContextProvider = ({ children }) => {
    const initialState = {
        user: null,
        isLogged: false,
    }

    const reducer = (state, action) => {
        if (action.type === "LOGUEADO") {
            return {
                ...state, user: action.payload, isLogged: true
            }
        } else if (action.type === "DESLOGUEADO") {
            return {
                ...state, user: action.payload, isLogged: false
            }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const loginUser = async (email, password) => {
        const response = await login(email, password)
        if (response.ok) {
            dispatch({ type: "LOGUEADO", payload: response })
        } else {
            console.error("Error en el login")
        }
    }

    const logout = async () => {
        try {
            const response = await logoutUser();
            if (response) {
                dispatch({
                    type: "DESLOGUEADO"
                });
            }
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
            throw new Error("Error al cerrar sesión");
        }
    };

    return (
        <loginContext.Provider value={{ state, loginUser, logout }}>
            {children}
        </loginContext.Provider>
    )
}

export const authenticate = async () => useContext(loginContext);
