import React from 'react'
import './Dia.css'

function Dia({ texto, marcado }) {
    const [marcadoActual, setMarcadoActual] = React.useState(marcado);
    return (
        <button className={marcadoActual ? 'dia marcado' : 'dia'} type='button' 
        onClick={() => setMarcadoActual(!marcadoActual)}>
            {texto}
        </button>
    )
}

export default Dia