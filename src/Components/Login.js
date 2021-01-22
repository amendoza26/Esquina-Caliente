import React, { useState } from 'react';
import './Login.css';
import { useHistory } from 'react-router-dom';

function Login() {

    const history = useHistory();

    return (
        <div className="login">
            <div className='login__container'>
                <h1>Inicia Sesion</h1>

                <form>
                    <h5>Usuario</h5>
                    <input type='text'  />

                    <h5>Contraseña</h5>
                    <input type='password'  />
                    
                    <button onClick={e => history.push('/home')} type='submit'  className="login__signInButton">Ingresar</button>
                </form>

                
            </div> 
        </div>
    )
}

export default Login
