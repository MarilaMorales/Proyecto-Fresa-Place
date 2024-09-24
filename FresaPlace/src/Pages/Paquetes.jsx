import React from 'react'
import CardPinata from "../Componentes/CardsPinata"
import Header from '../Componentes/Header'
import NavBarInc from '../Componentes/NavBar';
import Footer from '../Componentes/Footer';
import CardPaquetes from '../Componentes/CardsPaquetes';




function Paquete() {
  return (
    <div>
      <Header />
      <NavBarInc />
      <CardPaquetes/>
      <Footer />
    </div>
  )
}

export default Paquete