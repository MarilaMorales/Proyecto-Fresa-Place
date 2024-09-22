import React from 'react'
import Card from 'react-bootstrap/Card';
import Header from '../Componentes/Header'
import NavBarInc from '../Componentes/NavBar';
import CardDecoracion from '../Componentes/CardsDecoracion';
import Shopping from "../Componentes/Shopping"




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