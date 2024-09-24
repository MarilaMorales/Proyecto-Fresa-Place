import React from 'react'
import FormRegistro from '../Componentes/FromRegistro'
import "../Styles/Register.css"
import Footer from '../Componentes/Footer'



function Registro() {
  return (
    <div className='fondoRegister'>
      <FormRegistro />
      <Footer />
    </div>
  )
}

export default Registro