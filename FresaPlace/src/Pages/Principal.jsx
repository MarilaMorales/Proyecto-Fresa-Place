import React from 'react'
import NavBarInc from '../Componentes/NavBar'
import Header from '../Componentes/Header'
import CarruselPrinc from '../Componentes/CarruselPrinc'
import Footer from "../Componentes/Footer"
import "../Styles/Principal.css"






function Principal() {
  return (
    <div className='pagePrincipal'>
      <Header />
      <NavBarInc />
      <CarruselPrinc />
      <Footer />
    </div>
  )
}

export default Principal