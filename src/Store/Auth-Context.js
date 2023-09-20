import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
    token: '',
    islogged: false,
    login: (token) => { },
    logout: () => {}
    
})


export const AuthContextProvider = (props) => {

    const localToken = localStorage.getItem('user') || null

    const [token, setToken] = useState(localToken)
    
    const userloggedIn = !!token;

    const LogInHandler = (token) => {
        setToken(token);
        localStorage.setItem('user', token)
        localStorage.setItem('logInTime',Date.now())
        
    }

    const LogOutHandler = () => {
        setToken(null);
        localStorage.removeItem('user')
        localStorage.removeItem('logInTime')
    }

    const checkLogIn = () => {

        const localTime = localStorage.getItem('logInTime')
        
        if (localTime && localToken)
        {
            const expireTime = Number(localTime) + 5 * 60 * 1000;
            if (Date.now() >= expireTime)
            {
                setToken(null);
                localStorage.removeItem('user')
                localStorage.removeItem('logInTime')
            }
        }
        
    }

    useEffect(() => {
        checkLogIn();
    })

    const contextvalue = {
        token: token,
        islogged: userloggedIn,
        login: LogInHandler,
        logout: LogOutHandler
    }

    return (
        <AuthContext.Provider value={contextvalue}>
           {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext