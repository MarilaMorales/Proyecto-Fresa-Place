import React from 'react'
import CardPinata from "../Componentes/CardsPinata"
import Header from '../Componentes/Header'
import NavBarInc from '../Componentes/NavBar';
import Footer from '../Componentes/Footer';
import CardMural from '../Componentes/CardsMural';




function Mural() {
  return (
    <div>
      <Header />
      <NavBarInc />
      <CardMural />
      <Footer />
    </div>
  )
}

export default Mural
