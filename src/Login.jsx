import { useState } from 'react'
import './Login.css'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'Caleb' && password === '1234') {
            setIsLoggedIn(true);
            setError('');
        } else {
            setError('Usuario y/o contraseña incorrectos');
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        setPassword('');
        setError('');
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    if (isLoggedIn) {
        return (
            <div className="login-container">
                <div className="login-box welcome-box">
                    <h1>Bienvenido usuario {username}</h1>
                    <button className='boton cerrar-sesion' onClick={handleLogout}>Cerrar sesión</button>
                </div>
            </div>
        );
    }

    return (
        <div className="login-container">
            <form className="login-box" onSubmit={handleLogin}>
                <h1>Iniciar Sesión</h1>
                <div className="input-group">
                    <input
                        className='texto'
                        type="text"
                        placeholder="Usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group password-group">
                    <input
                        className='texto'
                        type={showPassword ? "text" : "password"}
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="button" className="ver-btn" onClick={togglePassword}>
                        {showPassword ? "Ocultar" : "Ver"}
                    </button>
                </div>
                <button type="submit" className='boton aceptar-btn'>Aceptar</button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
}

export default Login
