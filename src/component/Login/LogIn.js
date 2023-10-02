

import React, { useContext, useRef, useState } from 'react'
import classes from './Login.module.css';
import AuthContext from '../../Store/Auth-Context';
import { useNavigate} from 'react-router-dom';

const LogIn = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [err, setErr] = useState(null);
    const emailRef = useRef();
    const passRef = useRef();
    const authCxt = useContext(AuthContext);
    const navigate = useNavigate();

  const switchAuthModeHandler = () => {
      setIsLogin((prevState) => !prevState);
      setErr(null);
    };

    const SubmitHandler = async(e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        

        if (!isLogin)
        {
            const api = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDsdjRjtaabIJYNQYCCxkLXuGGkzyDGXlA', {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    password: pass,
                    returnSEcureToken:true
                }),
                headers:{'Content-Type':'application/json'}
            })
            const data = await api.json();
            if (!data.ok)
            {
                if(data.error)
                {
                    setErr(data.error.message);
                }
            }
            else {
                console.log('signedup')
            }
        }
        else
        {
            localStorage.setItem('email', email);
            const api = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDsdjRjtaabIJYNQYCCxkLXuGGkzyDGXlA', {
                method: 'POST',
                body: JSON.stringify({
                    email: email,
                    password: pass,
                    returnSEcureToken:true
                }),
                headers:{'Content-Type':'application/json'}
            })
            const data = await api.json();
            authCxt.login(data.idToken);
            navigate('/store',{ replace: true });
            if (!data.ok)
            {
                if(data.error)
                {
                    setErr(data.error.message);
                }
            }
            
        }
       

    }
    

    return (
        <section className={classes.auth}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            <form onSubmit={SubmitHandler}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' required ref={emailRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input
                        type='password'
                        id='password'
                        required
                        ref={passRef}
                    />
                </div>
                <h6 style={{color:'white'}}>{err}</h6>
                <div className={classes.actions}>
                    <button >{isLogin ? 'Login':'Create Account'}</button>
                    <button
                        type='button'
                        className={classes.toggle}
                        onClick={switchAuthModeHandler}
                    >
                        {isLogin ? 'Create new account' : 'Login with existing account'}
                    </button>
                </div>
            </form>
        </section>
    );
}

export default LogIn