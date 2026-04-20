import React from 'react'
import './Login.css'

function Login() {
    return (
        <form className="login-form" action="iniciar-sesion" method="post">
            <div>
                <h1>Iniciar Sesión</h1>
                <input className='texto' type="text" placeholder="Usuario" />
                <input className='texto' type="password" placeholder="Contraseña" />
                <button className='boton'>Iniciar sesión</button>
            </div>
        </form>
    )
}


export default Login