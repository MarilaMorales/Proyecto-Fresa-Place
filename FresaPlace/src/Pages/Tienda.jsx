import React from 'react'
import Header from '../Componentes/Header'
import CardDecoracion from '../Componentes/CardsDecoracion';
import Shopping from "../Componentes/Shopping"
import "../Styles/CarruselTienda.css"
import Footer from '../Componentes/Footer';






function Tienda() {
  return (
    <div>
      <Header />
      <Shopping />
      <CardDecoracion />
      <Footer />
    </div>
  )
}

export default Tienda