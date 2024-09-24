import React, { useState } from "react";
import CarruselProductos from "./CarruselTienda";
import "../Styles/CarruselTienda.css"
import PaqueteInside from "../IMG/Paquetes/PaqueteInside.jpg"
import Moana from "../IMG/Paquetes/Moana.jpg"
import Minnie from "../IMG/Paquetes/Minnie.jpg"
import PaqueteBluey from "../IMG/Paquetes/PaqueteBluey.webp"
import EditarCarrusel from "./EditarCarrusel";
import Tiendita from "../IMG/Tiendita.png"




const Tienda = () => {

  const productos = [
    {
      id: 1,
      nombre: "Paquete Minnie",
      precio: 35000,
      descripcion: "Incluye: 1 pancarta de feliz cumpleaños, 1 adorno para pastel, 24 adornos para cupcakes, 20 globos de látex, Piñata de 30cm, Mural de Nombre ",
      imagen: Minnie, 
    },
    {
      id: 2,
      nombre: "Paquete de Inside Out",
      precio: 80000,
      descripcion: "Incluye: 1 pancarta de feliz cumpleaños, 25 bolsitas a mano, 100 globos con diseño, 1 adorno para pastel, 24 adornos para cupcakes, Piñata de 30cm, Mural de Nombre ",
      imagen: PaqueteInside,
    },
    {
      id: 3,
      nombre: "Paquete Bluey",
      precio: 45000,
      descripcion: "Incluye: 1 pancarta de feliz cumpleaños, 15 bolsitas, 1 adorno para pastel, 24 adornos para cupcakes, 20 globos de látex, Piñata de 60cm, Mural de Nombre ",
      imagen: PaqueteBluey,
    },
    {
      id: 4,
      nombre: "Paquete Moanna",
      precio: 20000,
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
    <div id="fondoTienda">
      <img id="tienditaPic" src={Tiendita} alt="" />
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
