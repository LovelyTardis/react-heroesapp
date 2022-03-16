import React, { useEffect, useReducer } from "react"
import { AuthContext, initUser } from "./auth/authContext"
import { authReducer } from "./auth/authReducer"
import { AppRouter } from "./routers/AppRouter"



export const HeoresApp = () => {
    const [user, dispatch] = useReducer(authReducer, {}, initUser);
    useEffect(() => {
        if(!user) return;
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);
    
    return (
        <AuthContext.Provider value={{
            user,
            dispatch
        }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}