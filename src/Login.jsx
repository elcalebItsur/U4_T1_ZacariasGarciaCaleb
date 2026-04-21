import { useState } from 'react'
import './Login.css'

function Login() {
    const [usuario, setUsuario] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    const [estaAutenticado, setEstaAutenticado] = useState(false);
    const [error, setError] = useState('');
    const [mostrarContrasenia, setMostrarContrasenia] = useState(false);

    const manejarLogin = (e) => {
        e.preventDefault();
        if (usuario === 'user1' && contrasenia === '1234') {
            setEstaAutenticado(true);
            setError('');
        }
        else if (usuario === 'user2' && contrasenia === '5678') {
            setEstaAutenticado(true);
            setError('');
        }
        else {
            setError('Usuario y/o contraseña incorrectos');
        }
    };

    const manejarLogout = () => {
        setEstaAutenticado(false);
        setUsuario('');
        setContrasenia('');
        setError('');
    };

    const alternarContrasenia = () => {
        setMostrarContrasenia(!mostrarContrasenia);
    };

    if (estaAutenticado) {
        return (
            <div className="contenedor-login">
                <div className="cuadro-login cuadro-bienvenida">
                    <h1>Bienvenido usuario {usuario}</h1>
                    <button className='boton cerrar-sesion' onClick={manejarLogout}>Cerrar sesión</button>
                </div>
            </div>
        );
    }

    return (
        <div className="contenedor-login">
            <form className="cuadro-login" onSubmit={manejarLogin}>
                <h1>Iniciar Sesión</h1>
                <div className="grupo-input">
                    <input
                        className='texto'
                        type="text"
                        placeholder="Usuario"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        required
                    />
                </div>
                <div className="grupo-input">
                    <input
                        className='texto'
                        type={mostrarContrasenia ? "text" : "password"}
                        placeholder="Contraseña"
                        value={contrasenia}
                        onChange={(e) => setContrasenia(e.target.value)}
                        required
                    />
                    <button type="button" className="boton-ver" onClick={alternarContrasenia}>
                        {mostrarContrasenia ? "Ocultar" : "Ver"}
                    </button>
                </div>
                <div className="contenedor-boton-aceptar">
                    <button type="submit" className='boton boton-aceptar'>Aceptar</button>
                </div>
                {error && <p className="mensaje-error">{error}</p>}
            </form>
        </div>
    );
}

export default Login

