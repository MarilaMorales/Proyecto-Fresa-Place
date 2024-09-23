import React from 'react'
import NavBarInc from '../Componentes/NavBar'
import SideBar from '../Componentes/SideBar'
import AgregarAdmins from '../Componentes/AgregarAdmins' 
import {Row,Col} from 'react-bootstrap'






function Administracion() {
  return (
    <div>
      <NavBarInc />
      <Row>
        <Col sm={2} > <SideBar /></Col>
        <Col sm={10}><AgregarAdmins /></Col>
      </Row>
      
      

    </div>
  )
}

export default Administracion
