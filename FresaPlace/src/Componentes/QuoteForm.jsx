import React, { useState } from 'react';
import { postQuotes } from "../Services/post";
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com'; 





const CotizacionForm = () => {
  const [tamañoPiñata, setTamañoPiñata] = useState('');
  const [bolsitas, setBolsitas] = useState('');
  const [tipoBolsitas, setTipoBolsitas] = useState('');
  const [mural, setMural] = useState('');
  const [decoracion, setDecoracion] = useState('');



  const enviarQuote = async (e) => {
    e.preventDefault();

    const cotizacion = { tamañoPiñata, bolsitas, tipoBolsitas, mural, decoracion };

    try {
      // Guarda la cotización en el db.json
      const result = await postQuotes(cotizacion);
      console.log("Cotización guardada:", result);
      toast.success("Cotizacion enviada Exitosamente!");

      // Enviar el correo a través de EmailJS
      const templateParams = {
        to_name: "Cliente", 
        from_name: "Tu Nombre", 
        message: `Tamaño de piñata: ${tamañoPiñata}\nBolsitas: ${bolsitas}\nTipo de bolsitas: ${tipoBolsitas}\nMural: ${mural}\nDecoración: ${decoracion}`,
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
      <h2>Cotización</h2>

      <section>
        <h3>Piñata</h3>
        <label>
          Tamaño:
          <select value={tamañoPiñata} onChange={(e) => setTamañoPiñata(e.target.value)}>
            <option value="">Selecciona</option>
            <option value="30cm">30 cm</option>
            <option value="45cm">45 cm</option>
            <option value="60cm">60 cm</option>
          </select>
        </label>
        <label>
          Bolsitas de regalo:
          <select value={bolsitas} onChange={(e) => setBolsitas(e.target.value)}>
            <option value="">Selecciona</option>
            <option value="10">10 bolsitas</option>
            <option value="20">20 bolsitas</option>
            <option value="30">30 bolsitas</option>
          </select>
        </label>
        <label>
          Tipo de bolsitas:
          <select value={tipoBolsitas} onChange={(e) => setTipoBolsitas(e.target.value)}>
            <option value="">Selecciona</option>
            <option value="hechas a mano">Hechas a mano</option>
            <option value="de tienda">De tienda</option>
          </select>
        </label>
      </section>

      <section>
        <h3>Mural de Cumpleaños</h3>
        <label>
          Selecciona:
          <select value={mural} onChange={(e) => setMural(e.target.value)}>
            <option value="">Selecciona</option>
            <option value="nombre">Nombre</option>
            <option value="personaje">Personaje</option>
            <option value="ambos">Ambos</option>
          </select>
        </label>
      </section>

      <section>
        <h3>Decoración para la Fiesta</h3>
        <label>
          Tamaño:
          <select value={decoracion} onChange={(e) => setDecoracion(e.target.value)}>
            <option value="">Selecciona</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="plus">Plus</option>
          </select>
        </label>
      </section>

      <button type="submit">Enviar Cotización</button>
    </form>
  );
};

export default CotizacionForm;
