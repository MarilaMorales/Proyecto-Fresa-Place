import React, { useState } from 'react';
import { postProductos } from "../Services/post"; 
import imageUpload64 from '../Controller/Convertobase64';
import "../Styles/FormAdmin.css"

function FormAdmin() {

  // Se usa el useState
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tags, setTags] = useState('');
  const [imagen, setImagen] = useState('');


  const submitImagen = async (e) => {
    // Accede al archivo desde e.target.files
    const file = e.target.files[0];
    
    if (file) {
      try {
        // Convierte la imagen a base64
        const uploadpic = await imageUpload64(file);
        console.log("Imagen en base64:", uploadpic);
  
        // Actualiza el estado de imagen con la cadena base64
        setImagen(uploadpic);
      } catch (error) {
        console.error("Error al convertir la imagen:", error);
      }
    }
  };
  
  // Guardar los productos
  const GuardarProductos = async (event) => {
    event.preventDefault(); 


    const nuevoProducto = {
      nombre,
      descripcion,
      tags,
      imagen,
    };

    try {
      // Llama a la función postProductos desde el 
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
    <div className='formContainer'>
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
            type="file"
            name="profile"
            onChange={submitImagen} 
            required
          />
        </div>
        <button type="submit">Agregar Producto</button>
      </form>
      </div>
    </div>
  );
}

export default FormAdmin;




