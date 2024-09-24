import React from 'react'
import CardEscolar from "../Componentes/CardsEscolar"
import Header from '../Componentes/Header'
import NavBarInc from '../Componentes/NavBar';
import Footer from '../Componentes/Footer';




function Adornos() {
  return (
    <div>
      <Header />
      <NavBarInc />
      <CardEscolar />
      <Footer />
    </div>
  )
}

export default Adornos
