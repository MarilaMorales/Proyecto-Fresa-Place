import React, { useState } from 'react';



const SearchBar = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState('');

    const ReemplazoModal = (e) => {
        setInputValue(e.target.value);
    };

    const busqProductos = () => {
        onSearch(inputValue); // Llama a la función onSearch con el valor actual
    };

    return (
        <div className="containerSearch">
            <input
                type="text"
                placeholder="Search"
                value={inputValue}
                onChange={ReemplazoModal}
                className="inputSearch" // Clase para el input
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
