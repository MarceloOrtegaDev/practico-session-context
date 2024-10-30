const Url = "http://localhost:3000/"

export const login = async () => {
    fetch("http://localhost:3000/login/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
}

export const sessionUser = async () => {
    fetch("http://localhost:3000/session/", {
        method: 'GET',
        credentials: "include"
    })
}

export const logoutUser = async () => {
    fetch("http://localhost:3000/logout/", {
        method: "POST",
        credentials: "include"
    });
};