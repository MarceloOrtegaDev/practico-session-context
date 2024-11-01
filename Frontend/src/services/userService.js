const Url = "http://localhost:3000/";

export const login = async (email, password) => {
    try {
        const response = await fetch(`${Url}login`, {
            method: 'POST',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        return response;
    } catch (error) {
        console.error("Error en la petición de login:", error);
        throw error;
    }
};

export const sessionUser = async () => {
    try {
        const response = await fetch(`${Url}session`, {
            method: 'GET',
            credentials: 'include'
        });
        return response;
    } catch (error) {
        console.error("Error en la petición de sesión:", error);
        throw error;
    }
};

export const logoutUser = async () => {
    try {
        const response = await fetch(`${Url}logout`, {
            method: "POST",
            credentials: "include"
        });
        return response;
    } catch (error) {
        console.error("Error en la petición de logout:", error);
        throw error;
    }
};
