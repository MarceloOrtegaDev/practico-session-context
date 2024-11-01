import { authTypes } from "./types.js";

export const reducer = (state, action) => {
    switch (action.type) {
        case authTypes.Logged:
            return { ...state, user: action.payload, isLogged: true };
        case authTypes.loggedOut:
            return { ...state, user: null, isLogged: false };
        default:
            return state;
    }
};