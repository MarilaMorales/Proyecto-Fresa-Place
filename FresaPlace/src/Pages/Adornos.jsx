import React from 'react'
import Card from 'react-bootstrap/Card';
import CardAdornos from '../Componentes/CardsAdornos';
import Header from '../Componentes/Header'
import NavBarInc from '../Componentes/NavBar';
import Footer from '../Componentes/Footer';




function Adornos() {
  return (
    <div>
      <Header />
      <NavBarInc />
      <CardAdornos />
      <Footer />
    </div>
  )
}

export default Adornos
