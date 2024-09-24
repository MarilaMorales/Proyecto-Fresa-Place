import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../Pages/Login.jsx"
import Registro from '../Pages/Registro.jsx';
import Administracion from '../Pages/Administracion.jsx';
import Principal from '../Pages/Principal.jsx';
import Adornos from '../Pages/Adornos.jsx';
import Escolar from "../Pages/Escolar.jsx"
import Murales from "../Pages/Murales.jsx"
import EditarCards from '../Pages/EditarCards.jsx';
import Contactenos from "../Pages/Contactenos.jsx"
import AboutUs from "../Pages/AboutUs.jsx"
import Decoracion from "../Pages/Decoracion.jsx"
import Paquetes from "../Pages/Paquetes.jsx"
import Cotizaciones from "../Pages/Cotizaciones.jsx"
import Tienda from "../Pages/Tienda.jsx"
import AgregarAdministradores from "../Pages/AgregarAdministradores.jsx"
import Pinatas from "../Pages/Pinatas.jsx"





const Routing = () => {
  return (
    
     <Routes>
       <Route index element={<Login />} />
       <Route path="/Registro" element={<Registro />} />
       <Route path="/Login" element={<Login />} />
       <Route path="/Principal" element={<Principal />} />
       <Route path="/Escolar" element={<Escolar />} />
       <Route path="/Murales" element={<Murales />} />
       <Route path="/Pinata" element={<Pinatas />} />
       <Route path="/Adornos" element={<Adornos />} />
       <Route path="/Paquetes" element={<Paquetes />} />
       <Route path="/Decoracion" element={<Decoracion />} />
       <Route path="/Administracion" element={<Administracion />} />
       <Route path="/EditarCards" element={<EditarCards />} />
       <Route path="/Cotizaciones" element={<Cotizaciones />} />
       <Route path="/Contactenos" element={<Contactenos />} />
       <Route path="/AboutUs" element={<AboutUs />} />
       <Route path="/Tienda" element={<Tienda />} />
       <Route path="/AgregarAdministradores" element={<AgregarAdministradores />} />
      
     </Routes>
   );
};
export default Routing;
