import React, { useState } from 'react';
import { postQuotes } from "../Services/post";
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com'; 
import "../Styles/QuoteForm.css"

const CotizacionForm = () => {
  const [tamañoPiñata, setTamañoPiñata] = useState('');
  const [bolsitas, setBolsitas] = useState('');
  const [tipoBolsitas, setTipoBolsitas] = useState('');
  const [mural, setMural] = useState('');
  const [decoracion, setDecoracion] = useState('');
  const [email, setEmail] = useState(''); // Nuevo estado para el email

  const enviarQuote = async (e) => {
    e.preventDefault();
    const cotizacion = { tamañoPiñata, bolsitas, tipoBolsitas, mural, decoracion, email }; // Agregamos el email

    try {
      const result = await postQuotes(cotizacion);
      console.log("Cotización guardada:", result);
      toast.success("Cotizacion enviada Exitosamente!");

      const templateParams = {
        to_name: "Cliente", 
        from_name: "Tu Nombre", 
        message: `Tamaño de piñata: ${tamañoPiñata}\nBolsitas: ${bolsitas}\nTipo de bolsitas: ${tipoBolsitas}\nMural: ${mural}\nDecoración: ${decoracion}\nEmail: ${email}`, // Incluimos el email
      };

      await emailjs.send("service_56xi5wh", "template_hj0ofgb", templateParams, "rV7wVdf0tWzRA66hT");
      toast.success("Correo enviado exitosamente!");

    } catch (error) {
      console.error("Error al enviar la cotización:", error);
      toast.error("Error al enviar la cotizacion");
    }
  };

  return (
    <form className="containerQuote" onSubmit={enviarQuote}>
      <h2 id='CotizacionText'>Cotización</h2>

      <section>
        <h3>Datos de Contacto</h3>
        <label id='labelQuote' htmlFor="email">
          Correo Electrónico:
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </label>
      </section>

      <section>
        <h3>Piñata</h3>
        <label id='labelQuote' htmlFor="tamañoPiñata">
          Tamaño:
          <select id="tamañoPiñata" value={tamañoPiñata} onChange={(e) => setTamañoPiñata(e.target.value)}>
            <option value="">Selecciona</option>
            <option value="30cm">30 cm</option>
            <option value="45cm">45 cm</option>
            <option value="60cm">60 cm</option>
          </select>
        </label>
        <label id='labelQuote' htmlFor="bolsitas">
          Bolsitas de regalo:
          <select id="bolsitas" value={bolsitas} onChange={(e) => setBolsitas(e.target.value)}>
            <option value="">Selecciona</option>
            <option value="10">10 bolsitas</option>
            <option value="20">20 bolsitas</option>
            <option value="30">30 bolsitas</option>
          </select>
        </label>
        <label id='labelQuote' htmlFor="tipoBolsitas">
          Tipo de bolsitas:
          <select id="tipoBolsitas" value={tipoBolsitas} onChange={(e) => setTipoBolsitas(e.target.value)}>
            <option value="">Selecciona</option>
            <option value="hechas a mano">Hechas a mano</option>
            <option value="de tienda">De tienda</option>
          </select>
        </label>
      </section>

      <section>
        <h3>Mural de Cumpleaños</h3>
        <label id='labelQuote' htmlFor="mural">
          Selecciona:
          <select id="mural" value={mural} onChange={(e) => setMural(e.target.value)}>
            <option value="">Selecciona</option>
            <option value="nombre">Nombre</option>
            <option value="personaje">Personaje</option>
            <option value="ambos">Ambos</option>
          </select>
        </label>
      </section>

      <section>
        <h3>Decoración para la Fiesta</h3>
        <label id='labelQuote' htmlFor="decoracion">
          Tamaño:
          <select id="decoracion" value={decoracion} onChange={(e) => setDecoracion(e.target.value)}>
            <option value="">Selecciona</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="plus">Plus</option>
          </select>
        </label>
      </section>

      <button id='btnQuote' type="submit">Enviar Cotización</button>
    </form>
  );
};

export default CotizacionForm;
