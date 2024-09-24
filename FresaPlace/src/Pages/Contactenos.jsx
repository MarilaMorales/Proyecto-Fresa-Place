import React from 'react'
import '../Styles/Registro.css'
import "../Componentes/Contactenos"
import ContactForm from '../Componentes/Contactenos'
import NavBarInc from '../Componentes/NavBar'
import Footer from '../Componentes/Footer'

function ContactoForm() {
  return (
    <div>
      <NavBarInc />
      <ContactForm />
      <Footer />
 
    </div>
  )
}

export default ContactoForm
