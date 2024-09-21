import React from 'react'
import NavBarInc from '../Componentes/NavBar'
import Header from '../Componentes/Header'
import CarruselPrinc from '../Componentes/CarruselPrinc'
import Footer from "../Componentes/Footer"
import "../Styles/Principal.css"
import PictureText from "../Componentes/PictureText"







function Principal() {
  return (
    <div className='pagePrincipal'>
      <Header />
      <NavBarInc />
      <PictureText />
      <CarruselPrinc />
      <Footer />
    </div>
  )
}

export default Principal