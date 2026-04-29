import React, { useEffect, useState } from 'react'
import Semana from './semana/Semana.jsx'
import personas from './datos/personas.json'

function ListasPersonas() {
    const [listaPersonas, setListaPersonas] = useState(personas);
    const [agregarVisible, setAgregarVisible]=useState(false);
    const [nombre, setNombre] = useState('');
    const [disponibilidad, setDisponibilidad] = useState([false,false,false,false,false,false,false]);

    const resetForm = () => {
        setNombre('');
        setDisponibilidad([false,false,false,false,false,false,false]);
    };

    const handleGuardar = (event) => {
        event.preventDefault();
        const nuevoNombre = nombre.trim();
        if (!nuevoNombre) return;

        const nuevaPersona = {
            nombre: nuevoNombre,
            disponibilidad,
        };

        const nuevaLista = [...listaPersonas, nuevaPersona];
        setListaPersonas(nuevaLista);
        localStorage.setItem('personasStorage', JSON.stringify(nuevaLista));
        resetForm();
        setAgregarVisible(false);
    };

    const handleCancelar = () => {
        resetForm();
        setAgregarVisible(false);
    };

    const updatePersonaDisponibilidad = (index, nuevosChecked) => {
        const nuevaLista = listaPersonas.map((persona, i) =>
            i === index ? { ...persona, disponibilidad: nuevosChecked } : persona
        );
        setListaPersonas(nuevaLista);
        localStorage.setItem('personasStorage', JSON.stringify(nuevaLista));
    };

    useEffect(()=>{
        //Verificar si el storage esta gargado
        let personasStorage=localStorage.getItem('personasStorage')?
        JSON.parse(localStorage.getItem('personasStorage')):null;
        //Cuando no esta, cargar el json en el storage
        if(!personasStorage){
            localStorage.setItem('personasStorage',JSON.stringify(personas));
            setListaPersonas(personas);
        }else{
            setListaPersonas(personasStorage);
        }
    },[]);
    return (
        <>
            <h2>Lista Personas</h2>
            <button type='button' onClick={()=>setAgregarVisible(true)}>Agregar</button>
            {agregarVisible && (
                <form onSubmit={handleGuardar}>
                    <input type="text" placeholder='Nombre de la persona' value={nombre} onChange={(e)=>setNombre(e.target.value)} />
                    <Semana diasSeleccionados={disponibilidad} cambioDeDia={setDisponibilidad} />
                    <button type='submit'>Guardar</button>
                    <button type='button' onClick={handleCancelar}>Cancelar</button>
                </form>
            )}
            <table>
                <thead>
                    <tr>
                        <th>Persona</th>
                        <th>Disponibilidad</th>
                        <th>Días Disponibles</th>
                    </tr>
                </thead>
                <tbody>
                    {listaPersonas.map((persona, index) => (
                        <tr key={index}>
                            <td>{persona.nombre}</td>
                            <td>
                                <Semana diasSeleccionados={persona.disponibilidad} cambioDeDia={(nuevosChecked) => updatePersonaDisponibilidad(index, nuevosChecked)} />
                            </td>
                            <td>
                                {persona.disponibilidad.filter((dia) => dia === true).length}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default ListasPersonas