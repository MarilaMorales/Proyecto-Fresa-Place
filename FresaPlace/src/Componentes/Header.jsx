import React, { useState, useEffect } from 'react';
import "../Styles/Header.css";

const Header = () => {
  const [message, setMessage] = useState("BIENVENIDOS A FRESA PLACE");

  useEffect(() => {
    const messages = [
      "BIENVENIDOS A FRESA PLACE",
      "ENTRE A CONTACTENOS A COTIZAR TU PEDIDO"
    ];

    const intervalId = setInterval(() => {
      setMessage(prevMessage =>
        prevMessage === messages[0] ? messages[1] : messages[0]
      );
    }, 3000); // Cambia el mensaje cada 3000 milisegundos (3 segundos)

    // Limpieza del intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  return (
    <header>
      <h1 id='mensajeBanner'>{message}</h1>
    </header>
  );
};

export default Header;
