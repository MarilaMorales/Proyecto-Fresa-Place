import React, { useState, useEffect } from 'react';
import WhatsApp from "../IMG/WhatsApp.png"
import Instagram from "../IMG/Instagram.png"
import Facebook from "../IMG/Facebook.png"
import "../Styles/Footer.css"
import LogoTransparente from "../IMG/LogoTransparente.png"

const Mensaje = () => {
  const messages = [
    "¡Bienvenido a nuestra página web!",
    "Explora nuestros servicios.",
    "Contáctanos para más información, buscanos en Cotice",
    "Síguenos en redes sociales."
  ];

  const [currentMessage, setCurrentMessage] = useState(messages[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % messages.length;
        setCurrentMessage(messages[nextIndex]);
        return nextIndex;
      });
    }, 3000); // Cambia el mensaje cada 3 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar
  }, [messages.length]);

  return <h2 className="footer-message">{currentMessage}</h2>;
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={Facebook} alt="Facebook" />
        </a>
        <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
          <img src={WhatsApp} alt="WhatsApp" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={Instagram} alt="Instagram" />
        </a>
      </div>
      <Mensaje />
      <img id='LogoFooter' src={LogoTransparente} alt="" />
    </footer>
  );
};

export default Footer;
