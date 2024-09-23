
import React, { useState } from 'react';
import { postProductos } from "../Services/post"; 
import imageUpload64 from '../Controller/Convertobase64';
import "../Styles/FormAdmin.css"
import { toast } from 'react-toastify';


function FormAdmin() {

  // Se usa el useState
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [tags, setTags] = useState('');
  const [imagen, setImagen] = useState('');
  const [precio, setPrecio] = useState(''); 

  const submitImagen = async (e) => {
    
    const file = e.target.files[0];
    
    if (file) {
      try {
        // Convierte la imagen a base64
        const base64Image = await imageUpload64(file);
        console.log("Imagen en base64:", base64Image);
  
        // Actualiza el estado de imagen con la cadena base64
        setImagen(base64Image);
      } catch (error) {
        console.error("Error al convertir la imagen:", error);
      }
    }
  };
  
  // Guardar los productos
  const GuardarProductos = async (event) => {
    event.preventDefault(); 

    // Añadir el precio al objeto del nuevo producto
    const nuevoProducto = {
      nombre,
      descripcion,
      tags,
      imagen,
      precio, 
    };

    try {
    
      await postProductos(nuevoProducto);

 
      toast.success("Producto agregado exitosamente!");

      // Limpiar los campos del formulario
      setNombre("");
      setDescripcion("");
      setTags("");
      setImagen("");
      setPrecio(""); 
    
    } catch (error) {
      toast.error("Hubo un error al agregar el producto.");
    }
  };

  return (
<form onSubmit={GuardarProductos}>
  <div>
    <label htmlFor="nombre">Nombre del producto:</label>
    <input
      id="nombre"
      type="text"
      value={nombre}
      onChange={(e) => setNombre(e.target.value)}
      required
    />
  </div>
  <div>
    <label htmlFor="descripcion">Descripción:</label>
    <textarea
      id="descripcion"
      value={descripcion}
      onChange={(e) => setDescripcion(e.target.value)}
      required
    />
  </div>
  <div>
    <label htmlFor="tags">Tags:</label>
    <input
      id="tags"
      type="text"
      value={tags}
      onChange={(e) => setTags(e.target.value)}
    />
  </div>
  <div>
    <label htmlFor="imagen">Imagen:</label>
    <input
      id="imagen"
      type="file"
      accept="image/*"
      onChange={submitImagen}
    />
  </div>
  <div>
    <label htmlFor="precio">Precio:</label>
    <input
      id="precio"
      type="number"
      step="0.01"
      value={precio}
      onChange={(e) => setPrecio(e.target.value)}
      required
    />
  </div>
  <button type="submit" id="agregarProducto">Agregar Producto</button>
</form>
  );
}

export default FormAdmin;

















