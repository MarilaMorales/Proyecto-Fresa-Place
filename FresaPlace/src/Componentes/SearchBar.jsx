
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [inputValue, setInputValue] = useState(''); // Guarda lo que el usuario escribe

    const handleChange = (e) => {
        setInputValue(e.target.value); // Actualiza el valor de entrada
        onSearch(e.target.value); // Llama a la función para filtrar productos
    };

    return (
        <input
            type="text"
            id="busqueda"
            placeholder="Search"
            value={inputValue}
            onChange={handleChange}
        />
    );
};

export default SearchBar;
