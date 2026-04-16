import React from 'react'
import './Login.css'

function Login() {
    return (
        <div>
            <h1>Login</h1>
            <input className='texto' type="text" placeholder="Usuario" />
            <input className='texto' type="password" placeholder="Contraseña" />
            <button className='boton'>Iniciar sesión</button>
        </div>
    )
}

export default Login