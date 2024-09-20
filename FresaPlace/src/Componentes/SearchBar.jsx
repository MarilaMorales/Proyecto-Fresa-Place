import React, { useState } from 'react';
import "../styles/SearchBar.css"


const SearchBar = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');

    const ReemplazoModal = (e) => {
        setInputValue(e.target.value);
    };

    const busqProductos = () => {
        onSearch(inputValue); 
    };

    return (
        <div className="containerSearch">
            <input
                type="text"
                id='searchBarText'
 
                value={inputValue}
                onChange={ReemplazoModal}
                className="inputSearch" 
            />
            <button
                onClick={busqProductos}
                className="buttonSearch" // Clase para el botón
            >
                Buscar
            </button>
        </div>
    );
};

export default SearchBar;
