import React from 'react'
import Card from 'react-bootstrap/Card';
import Header from '../Componentes/Header'
import NavBarInc from '../Componentes/NavBar';
import CardDecoracion from '../Componentes/CardsDecoracion';
import Footer from '../Componentes/Footer';




function Decoracion() {
  return (
    <div>
      <Header />
      <NavBarInc />
      <CardDecoracion />
      <Footer />
    </div>
  )
}

export default Decoracion