import React from 'react'
import NavBarInc from '../Componentes/NavBar';
import EditarCards from "../Componentes/EditarCards"
import SideBar from '../Componentes/SideBar';
import {Row,Col} from 'react-bootstrap'
import QuoteForm from "../Componentes/QuoteForm"



function EditarCard() {
    return (
      <div>
        <NavBarInc />
        <Row>
        <Col sm={2} > <SideBar /></Col>
        <Col sm={10}><QuoteForm /></Col>
      </Row>
      </div>
    )
  }
  

export default EditarCard
