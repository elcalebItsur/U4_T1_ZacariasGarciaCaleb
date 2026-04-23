import React from 'react'
import Semana from './semana/Semana.jsx'
import personas from './datos/personas.json'

function ListasPersonas() {
    return (
        <>
            <h2>Lista Personas</h2>
            <button>Agregar Persona</button>
            <form>
                <input type="text" placeholder="Nombre de la persona" />
                <Semana></Semana>
                <button type="submit">Agregar</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Persona</th>
                        <th>Disponibilidad</th>
                    </tr>
                </thead>
                <tbody>
                    {personas.map((persona, index) => (
                        <tr key={index}>
                            <td>{persona.nombre}</td>
                            <td>
                                <Semana disponibilidad={persona.disponibilidad} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default ListasPersonas