import React, { useEffect, useState } from 'react';
import "../Styles/Header.css";
import Logo from "../IMG/Logo.png";
import { getProductos } from '../Services/get';
import SearchBar from "../Componentes/SearchBar"
import ModalREsults from "../Componentes/ModalResults"; 






const Header = () => {

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
            (producto.descripcion && producto.descripcion.toLowerCase().includes(inputBusqueda.toLowerCase())) // Agrega la búsqueda por descripción
        );
        filtroProductos(filtered);
        setShowModal(true);
    };
    
    const CerrarModal = () => {
        setShowModal(false); // Cierra el modal
    };

    return (
        <header className="containerHeader">
            <div className="logoHeader">
                <img src={Logo} alt="Logo" />
            </div>
            <nav className="navHeader">
                {/* Info Extra */}
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











// import React from 'react';
// import "../Styles/Header.css";
// import Logo from "../IMG/Logo.png"

// const Header = () => {
//   return (
//     <header className="containerHeader">
//       <div className="logoHeader">
//         <img src={Logo} alt="Logo"/>
//       </div>
//       <nav className="navHeader">
//         {/*Enlaces de navegación si los necesitas */}
//       </nav>
//     </header>
//   );
// };

// export default Header;
