import React, { useState, useEffect } from 'react';
import { getAdmins } from '../Services/get'; 
import { deleteAdmins } from '../Services/delete'; 
import { postAdmins } from '../Services/post'; 
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import "../Styles/AgregarAdmins.css"; 
import { Button } from 'react-bootstrap'; 

const agregarAdmins = () => {


    const [emailInput, setEmailInput] = useState(""); // Estado para almacenar el correo
    const [passwordInput, setPasswordInput] = useState(""); // Estado para almacenar la contraseña
    const [administradores, setAdministradores] = useState([]); // Estado para almacenar la lista de administradores
    
    useEffect(() => {
        cargarAdministradores(); // Carga los administradores 
    }, []);

    const AgregarAdministrador = async () => {
        // Función para agregar un nuevo administrador
        if (emailInput !== "" && passwordInput !== "") { // Verifica que ambos campos no estén vacíos
            const adminExistente = administradores.some(admin => admin.email === emailInput); // Verifica si el administrador ya existe

            if (adminExistente) {
                toast.error("El administrador ya está registrado"); // Notifica si el administrador ya existe
                return; // Sale de la función si el administrador ya existe
            }

            // Crea un nuevo objeto administrador con email y contraseña
            const nuevoAdministrador = { email: emailInput, password: passwordInput }; 
            try {
                // Llama a la función para agregar el administrador
                await postAdmins(nuevoAdministrador);
                // Actualiza el estado con el nuevo administrador
                setAdministradores([...administradores, nuevoAdministrador]);
                // Limpia los campos de entrada
                setEmailInput("");
                setPasswordInput("");
                toast.success("Administrador agregado exitosamente"); // Notifica que se ha agregado exitosamente
            } catch (error) {
                toast.error("Error al agregar administrador"); // Notifica si hay un error
                console.error('Error al agregar administrador:', error); // Muestra el error en la consola
            }
        } else {
            toast.error("Por favor, ingresa un correo electrónico y una contraseña."); // Notifica si faltan campos
        }
    };

    const cargarAdministradores = async () => {
        // Función para cargar los administradores desde el backend
        try {
            const data = await getAdmins(); // Obtiene la lista de administradores
            setAdministradores(data); // Actualiza el estado con los administradores obtenidos
        } catch (error) {
            console.error('Error al cargar administradores:', error); // Muestra el error en la consola
        }
    };

    const eliminarAdministrador = async (adminDelete) => {
        // Función para eliminar un administrador
        try {
            await deleteAdmins(adminDelete.id); // Llama a la función para eliminar el administrador
            // Filtra la lista de administradores para remover al eliminado
            setAdministradores(administradores.filter(admin => admin.id !== adminDelete.id));
            toast.success("Administrador eliminado exitosamente"); // Notifica que se ha eliminado exitosamente
        } catch (error) {
            toast.error("Error al eliminar administrador"); // Notifica si hay un error
            console.error("Error al eliminar administrador:", error); // Muestra el error en la consola
        }
    };

    return (
        <div className="administradoresContainer">
            <h2 id="h2Titulo">Administradores</h2>
            <div className="administradoresContainer2">
                <div className="containerAdministradores">
                    <input
                        type="email" // Campo de entrada para el correo
                        placeholder="Agregar correo electrónico"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)} // Actualiza el estado del correo
                        required
                    />
                    <input
                        type="password" // Campo de entrada para la contraseña
                        placeholder="Agregar contraseña"
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)} // Actualiza el estado de la contraseña
                        required
                    />
                    <Button id="btnAgregarAdmin" onClick={AgregarAdministrador}>Agregar Administrador</Button>
                </div>
                <div id="contenedorAdministradores">
                    {administradores.map((admin) => ( // Mapea la lista de administradores
                        <div key={admin.id} className="administrador">
                            {`Administrador: ${admin.email}`} 
                            <div className="btnContainer">
                                <Button id='btnAdminDelete' onClick={() => eliminarAdministrador(admin)}>Eliminar</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default agregarAdmins; // Exporta el componente para ser utilizado en otros lugares
