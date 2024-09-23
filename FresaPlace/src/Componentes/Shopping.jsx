import React, { useState } from "react";
import CarruselProductos from "./CarruselTienda";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../Styles/CarruselTienda.css"
import PaqueteInside from "../IMG/Paquetes/PaqueteInside.jpg"
import Moana from "../IMG/Paquetes/Moana.jpg"
import Minnie from "../IMG/Paquetes/Minnie.jpg"
import PaqueteBluey from "../IMG/Paquetes/PaqueteBluey.webp"
import EditarCarrusel from "./EditarCarrusel";




const Tienda = () => {

  const productos = [
    {
      id: 1,
      nombre: "Paquete Minnie",
      precio: 35.000,
      descripcion: "Incluye: 1 pancarta de feliz cumpleaños, 1 adorno para pastel, 24 adornos para cupcakes, 20 globos de látex, Piñata de 30cm, Mural de Nombre ",
      imagen: Minnie, 
    },
    {
      id: 2,
      nombre: "Paquete de Inside Out",
      precio: 80.000,
      descripcion: "Incluye: 1 pancarta de feliz cumpleaños, 25 bolsitas a mano, 100 globos con diseño, 1 adorno para pastel, 24 adornos para cupcakes, Piñata de 30cm, Mural de Nombre ",
      imagen: PaqueteInside,
    },
    {
      id: 3,
      nombre: "Paquete Bluey",
      precio: 45.000,
      descripcion: "Incluye: 1 pancarta de feliz cumpleaños, 15 bolsitas, 1 adorno para pastel, 24 adornos para cupcakes, 20 globos de látex, Piñata de 60cm, Mural de Nombre ",
      imagen: PaqueteBluey,
    },
    {
      id: 4,
      nombre: "Paquete Moanna",
      precio: 19.99,
      descripcion: "Incluye: 1 pancarta de feliz cumpleaños,15 bolsitas,  1 adorno para pastel, 24 adornos para cupcakes, 20 globos de látex, Piñata de 30cm, Mural de Personaje y Nombre",
      imagen: Moana,
    },
  
  ];

  const [updateProducto, setUpdateProducto] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const abrirModal = (producto) => {
    setUpdateProducto(producto);
    setShowModal(true);
  };

  const cerrarModal = () => {
    setShowModal(false);
    setUpdateProducto(null);
  };







  return (
    <div>
      <h2>Tienda de Productos</h2>
      <CarruselProductos productos={productos} abrirModal={abrirModal} />

      {updateProducto && (
        <EditarCarrusel
          show={showModal}
          CerrarModal={cerrarModal}
          updateProducto={updateProducto}
        />
      )}
    </div>
  );
};

export default Tienda;
