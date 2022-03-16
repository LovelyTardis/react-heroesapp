import { createContext } from "react";



export const AuthContext = createContext();

export const initUser = () => {
    return JSON.parse(localStorage.getItem('user')) || {
        logged: false,
    };
}

// name: 'Guest' + (parseInt(Math.random()*9999999)),