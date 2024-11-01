import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { login, logoutUser, sessionUser} from '../services/userService';
import { reducer } from '../reducer/reducer.js';
import { initialState } from '../reducer/states.js';
import { authTypes } from '../reducer/types.js';

export const loginContext = createContext();

export const ContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const loginUser = async (email, password) => {
        const response = await login(email, password);
        if (response.ok) {
            dispatch({ type: authTypes.Logged, payload: response });
        } else {
            console.error("Error en el login");
        }
    };

    const logout = async () => {
        try {
            const response = await logoutUser();
            if (response.ok) {
                dispatch({type: authTypes.loggedOut});
            }
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
        }
    };

    const useSession = async () => {
        const res = await sessionUser();
        if (res.ok) {
            dispatch({ type: authTypes.Logged, payload: res }); // Actualiza el estado
        } else {
            console.log("Error en la sesión");
            dispatch({ type: authTypes.loggedOut }); // Actualiza el estado si no está autenticado
        }
    };

    // Verifica la sesión al cargar el contexto
    useEffect(() => {
        useSession(); // Llama a useSession al cargar el contexto
    }, []);
    


    return (
        <loginContext.Provider value={{ state, loginUser, logout}}>
            {children}
        </loginContext.Provider>
    );
};

// Ajuste aquí para que `authenticate` no sea async ni use paréntesis
export const authenticate = () => useContext(loginContext);
