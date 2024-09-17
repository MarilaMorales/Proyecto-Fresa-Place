import React from 'react'
import NavBarInc from '../Componentes/NavBar'
import SideBar from '../Componentes/SideBar'
import FormAdmin from '../Componentes/FormAdmin'
import {Row,Col} from 'react-bootstrap'






function Administracion() {
  return (
    <div>
      <NavBarInc />
      <Row>
        <Col sm={2} > <SideBar /></Col>
        <Col sm={10}><FormAdmin /></Col>
      </Row>
      
      

    </div>
  )
}

export default Administracion
