async function postUser(nombre, correo, password) {
    try {
        let nuevoUsuario = {
            nombre,
            correo,
            password
        };

        let response = await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevoUsuario)
        });

        if (!response.ok) {
            throw new Error("No se pudo guardar el usuario");
        }

        let data = await response.json();
        console.log("Usuario guardado con éxito:", data);
    } catch (error) {
        console.error('No se pudo guardar el usuario:', error);
    }
}






export const postProductos = async (productos) => {
    try {
        const response = await fetch('http://localhost:3000/productos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productos),
        });
        if (!response.ok) {
            throw new Error('Error al agregar Productos ');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};




export {postUser}