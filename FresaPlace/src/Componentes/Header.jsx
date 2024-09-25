import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import "../Styles/Header.css";
import LogoTransparente from "../IMG/LogoTransparente.png";
import { getProductos } from '../Services/get';
import SearchBar from "../Componentes/SearchBar";
import ModalREsults from "../Componentes/ModalResults"; 

const Header = () => {
    const navigate = useNavigate(); // Inicializa useNavigate
    const [productos, setProductos] = useState([]);
    const [filteredProductos, filtroProductos] = useState([]);
    const [showModal, setShowModal] = useState(false); // Estado para controlar el modal

    useEffect(() => {
        const fetchProductos = async () => {
            const data = await getProductos();
            setProductos(data);
            filtroProductos(data);
        };
        fetchProductos();
    }, []);

    const Busqueda = (inputBusqueda) => {
        const filtered = productos.filter((producto) =>
            (producto.nombre && producto.nombre.toLowerCase().includes(inputBusqueda.toLowerCase())) ||
            (producto.descripcion && producto.descripcion.toLowerCase().includes(inputBusqueda.toLowerCase()))
        );
        filtroProductos(filtered);
        setShowModal(true);
    };

    const CerrarModal = () => {
        setShowModal(false); 
    };

    const handleLogoClick = () => {
        navigate('/Principal'); 
    };

    return (
        <header className="containerHeader">
            <div className="logoHeader" onClick={handleLogoClick}> 
                <img src={LogoTransparente} alt="Logo" />
            </div>
            <nav className="navHeader">
           
            </nav>
            <SearchBar onSearch={Busqueda} />
            <ModalREsults 
                show={showModal} 
                handleClose={CerrarModal} 
                results={filteredProductos} 
            />
        </header>
    );
};

export default Header;



