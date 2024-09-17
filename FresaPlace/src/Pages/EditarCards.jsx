import React from 'react'
import NavBarInc from '../Componentes/NavBar';
import EditarCards from "../Componentes/EditarCards"
import SideBar from '../Componentes/SideBar';



function EditarCard() {
    return (
      <div>
        <NavBarInc />
        <SideBar />
        <EditarCards />
      </div>
    )
  }
  

export default EditarCard