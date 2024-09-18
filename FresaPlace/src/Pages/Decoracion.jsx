import React from 'react'
import Card from 'react-bootstrap/Card';
import Header from '../Componentes/Header'
import NavBarInc from '../Componentes/NavBar';
import CardDecoracion from '../Componentes/CardsDecoracion';




function Decoracion() {
  return (
    <div>
      <Header />
      <NavBarInc />
      <CardDecoracion />
    </div>
  )
}

export default Decoracion