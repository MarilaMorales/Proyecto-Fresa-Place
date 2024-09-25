import React from 'react'
import Header from '../Componentes/Header'

import Shopping from "../Componentes/Shopping"
import "../Styles/CarruselTienda.css"
import Footer from '../Componentes/Footer';
import NavBarInc from '../Componentes/NavBar';






function Tienda() {
  return (
    <div>
      <Header />
      <NavBarInc /> 
      <Shopping />
      <Footer />
    </div>
  )
}

export default Tienda