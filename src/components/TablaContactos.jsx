import React from 'react'

const TablaContactos = ({ contactos = [], dispatch }) => {
    
    const handleDelete = (id) => {
        const deleteAction = {
            type: "delete",
            payload: id
        }

        dispatch(deleteAction)
    }

  return (

    <table className="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Numero T</th>
                <th>Accion</th>
            </tr>
        </thead>
        <tbody>
           {
           contactos.map((contacto) => {
               const idFinal = contacto.id.split("-")
               
               return (
                <tr key={contacto.id}>
                    <th>{idFinal[1]}</th>
                    <td>{contacto.nombre}</td>
                    <td>{contacto.apellido}</td>
                    <td>{contacto.numero}</td>
                    <td>
                        <button onClick={() =>handleDelete(contacto.id)} className="btn btn-danger">Eliminar</button>
                    </td>
                </tr>
                )
             })
           }
        </tbody>
    </table>

  )
}

export default TablaContactos