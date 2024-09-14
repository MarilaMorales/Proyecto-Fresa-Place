import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../Pages/Login.jsx"
import Registro from '../Pages/Registro.jsx';
import Administracion from '../Pages/Administracion.jsx';
import Principal from '../Pages/Principal.jsx';


const Routing = () => {
  return (
    
     <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/Registro" element={<Registro />} />
       <Route path="/Login" element={<Login />} />
       <Route path="/Principal" element={<Principal />} />
       <Route path="/Administracion" element={<Administracion />} />
     </Routes>
   );
};
export default Routing;
