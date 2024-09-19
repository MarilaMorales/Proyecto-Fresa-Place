import React, { useEffect, useState } from 'react';
import "../Styles/Header.css";
import Logo from "../IMG/Logo.png";
import { getProductos } from '../Services/get';
import SearchResultsModal from './SearchResultsModal'; 





const Header = () => {

    const [productos, setProductos] = useState([]);
    const [filteredProductos, setFilteredProductos] = useState([]);
    const [showModal, setShowModal] = useState(false); // Estado para controlar el modal


    
    useEffect(() => {
        const fetchProductos = async () => {
            const data = await getProductos();
            setProductos(data);
            setFilteredProductos(data);
        };
        fetchProductos();
    }, []);

    const handleSearch = (searchTerm) => {
        const filtered = productos.filter((producto) =>
            producto.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProductos(filtered);
        setShowModal(true); // Muestra el modal al hacer la búsqueda
    };

    const handleCloseModal = () => {
        setShowModal(false); // Cierra el modal
    };

    return (
        <header className="containerHeader">
            <div className="logoHeader">
                <img src={Logo} alt="Logo" />
            </div>
            <nav className="navHeader">
                {/* Enlaces de navegación si los necesitas */}
            </nav>
            <SearchBar onSearch={handleSearch} />
            <SearchResultsModal 
                show={showModal} 
                handleClose={handleCloseModal} 
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
