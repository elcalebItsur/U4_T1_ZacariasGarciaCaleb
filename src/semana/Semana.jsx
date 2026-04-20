import React from 'react'
import Dia from './Dia'

function Semana(loboral = true, diasSeleccionados, extendida = true) {
    let dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
    return (
        <div className='semana'>
            <Dia marcado={false} texto="Lunes"></Dia>
            <Dia marcado={true} texto="Martes"></Dia>
            <Dia marcado={false} texto="Miércoles"></Dia>
            <Dia marcado={false} texto="Jueves"></Dia>
            <Dia marcado={true} texto="Viernes"></Dia>
            <Dia marcado={false} texto="Sábado"></Dia>
            <Dia marcado={false} texto="Domingo"></Dia>
        </div>
    )
}

export default Semana