import React from 'react'

import Header from '../Componentes/Header'

import CardDecoracion from '../Componentes/CardsDecoracion';
import Shopping from "../Componentes/Shopping"
import "../Styles/CarruselTienda.css"






function Tienda() {
  return (
    <div>
      <Header />
      <Shopping />
      <CardDecoracion />
    </div>
  )
}

export default Tienda