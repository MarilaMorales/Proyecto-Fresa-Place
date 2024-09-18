import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../Pages/Login.jsx"
import Registro from '../Pages/Registro.jsx';
import Administracion from '../Pages/Administracion.jsx';
import Principal from '../Pages/Principal.jsx';
import Adornos from '../Pages/Adornos.jsx';
import EditarCards from '../Pages/EditarCards.jsx';
import Contactenos from "../Pages/Contactenos.jsx"
import AboutUs from "../Pages/AboutUs.jsx"
import Decoracion from "../Pages/Decoracion.jsx"

const Routing = () => {
  return (
    
     <Routes>
       <Route index element={<Login />} />
       <Route path="/Registro" element={<Registro />} />
       <Route path="/Login" element={<Login />} />
       <Route path="/Principal" element={<Principal />} />
       <Route path="/Adornos" element={<Adornos />} />
       <Route path="/Decoracion" element={<Decoracion />} />
       <Route path="/Administracion" element={<Administracion />} />
       <Route path="/EditarCards" element={<EditarCards />} />
       <Route path="/Contactenos" element={<Contactenos />} />
       <Route path="/AboutUs" element={<AboutUs />} />
      
     </Routes>
   );
};
export default Routing;
