import React, { useReducer } from 'react'
import TablaContactos from './TablaContactos'
import Formulario from "./FormularioAdd";
import { ContactosReducer } from '../reducers/ContactosReducer';
import { useEffect } from 'react';
import { useState } from 'react';

const init = () => {
    const contactos = localStorage.getItem("contactos")

    return contactos ? JSON.parse(contactos) : [];
}

const Contactos = () => {
    const [state, dispatch] = useReducer(ContactosReducer, [], init)

    useEffect(() => {
        localStorage.setItem("contactos", JSON.stringify(state))
    }, [state])
    
    const [formView, setFormView] = useState(false)
    

  return (
      <div className='container mt-3'>
          
          <button className='btn btn-primary mb-3' onClick={() => setFormView(!formView)}>{formView ? "Cerrar Formulario" : "Agregar Contacto"}</button>
          {
              formView && <Formulario dispatch={dispatch} /> 
          }
        
        <TablaContactos contactos={state} dispatch={dispatch} />
    </div>
  )
}

export default Contactos