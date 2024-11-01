import { useReducer, useEffect } from "react";
import { authTypes } from '../reducer/types.js';
import { login, logoutUser, sessionUser} from '../services/userService.js';
import { initialState } from '../reducer/states.js';
import { reducer } from '../reducer/reducer.js';



export const useSession = () => {

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

    const getSession = async () => {
        const res = await sessionUser();
        if (res.ok) {
            dispatch({ type: authTypes.Logged, payload: res }); // Actualiza el estado
        } else {
            console.log("Error en la sesión");
            dispatch({ type: authTypes.loggedOut }); // Actualiza el estado si no está autenticado
        }
    };

    useEffect(() => {
        getSession(); // Llama a useSession al cargar el contexto
    }, []);

    return {loginUser, logout, getSession, state}
}