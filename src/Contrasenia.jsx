import { useState } from 'react'
import './Contrasenia.css'

function Contrasenia(props) {
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
            <input className='texto' type={type} defaultValue={props.ValorInicial} onChange={props.cambioContrasenia} />
            <button className='boton' type='button' onClick={ver_ocultar}>{texto}</button>
        </div>
    );
}

export default Contrasenia;