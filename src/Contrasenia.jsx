import { useState } from 'react'
import './Contrasenia.css'

function Contrasenia() {
    const [type, setType] = useState("password");
    const [texto, setTexto] = useState("ver");

    const ver_ocultar = () => {
        if (type === "password") {
            setType("text");
            setTexto("ocultar");
        } else {
            setType("password");
            setTexto("ver");
        }
    }
    return (
        <div>
            <input className='texto' type={type} placeholder="Contraseña" />
            <button className='boton' type='button' onClick={ver_ocultar}>{texto}</button>
        </div>
    );
}

export default Contrasenia;