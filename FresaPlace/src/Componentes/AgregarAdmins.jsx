import React, { useState, useEffect } from 'react';
import { getAdmins } from '../Services/get';
import { deleteAdmins } from '../Services/delete'; 
import { postAdmins } from '../Services/post'; 
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/AgregarAdmins.css"; 
import { Button } from 'react-bootstrap';






const agregarAdmins = () => {
    const [emailInput, setEmailInput] = useState("");
    const [administradores, setAdministradores] = useState([]);
    
    useEffect(() => {
        cargarAdministradores();
    }, []);

    const AgregarAdministrador = async () => {
        if (emailInput !== "") {
            const adminExistente = administradores.some(admin => admin.email === emailInput);

            if (adminExistente) {
                toast.error("El administrador ya está registrado");
                return;
            }

            const nuevoAdministrador = { email: emailInput };
            try {
                await postAdmins(nuevoAdministrador);
                setAdministradores([...administradores, nuevoAdministrador]);
                setEmailInput("");
                toast.success("Administrador agregado exitosamente");
            } catch (error) {
                toast.error("Error al agregar administrador");
                console.error('Error al agregar administrador:', error);
            }
        } else {
            toast.error("Por favor, ingresa un correo electrónico.");
        }
    };

    const cargarAdministradores = async () => {
        try {
            const data = await getAdmins();
            setAdministradores(data);
        } catch (error) {
            console.error('Error al cargar administradores:', error);
        }
    };

    const eliminarAdministrador = async (adminDelete) => {
        try {
            await deleteAdmins(adminDelete.id);
            setAdministradores(administradores.filter(admin => admin.id !== adminDelete.id));
            toast.success("Administrador eliminado exitosamente");
        } catch (error) {
            toast.error("Error al eliminar administrador");
            console.error("Error al eliminar administrador:", error);
        }
    };

    return (
        <div className="administradoresContainer">
            <h2 id="h2Titulo">Administradores</h2>
            <div className="administradoresContainer2">
                <div className="containerAdministradores">
                    <input
                        type="email"
                        placeholder="Agregar correo electrónico"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        required
                    />
                    <Button id="btnAgregarAdmin" onClick={AgregarAdministrador}>Agregar Administrador</Button>
                </div>
                <div id="contenedorAdministradores">
                    {administradores.map((admin) => (
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

export default agregarAdmins;
