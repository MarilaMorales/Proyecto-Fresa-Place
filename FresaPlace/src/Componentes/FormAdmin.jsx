import React, { useState } from 'react';
import { postProductos } from "../Services/post"; 


function FormAdmin() {

 // Se usa el useState
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tags, setTags] = useState('');
  const [imagen, setImagen] = useState('');


  // Función para manejar el envío del formulario
  const GuardarProductos = async (event) => {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Objeto con los datos del formulario
    const nuevoProducto = {
      nombre,
      descripcion,
      tags,
      imagen,
    };

    try {
      // Llama a la función postProductos desde el servicio
      await postProductos(nuevoProducto);

      // Si la solicitud fue exitosa
      alert("Producto agregado exitosamente!");
      // Limpiar los campos del formulario
      setNombre("");
      setDescripcion("");
      setTags("");
      setImagen("");
    } catch (error) {
      alert("Hubo un error al agregar el producto.");
    }
  };

  return (
    <div>
      <h1>Agregar Producto</h1>
      <form onSubmit={GuardarProductos}>
        <div>
          <label>Nombre de producto:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} //El OnChange maneja en tiempo real los cambios de los inputs
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Tags:</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Imagen:</label>
          <input
            type="text"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            required
          />
        </div>
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
}

export default FormAdmin;




