export const deleteProductos = async (id) => {
    try {
        const response = await fetch(`${'http://localhost:3000/productos'}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Error al eliminar el Producto');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const deleteUsers = async (id) => {
    try {
        const response = await fetch(`${'http://localhost:3000/users'}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Error al eliminar el Usuario');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};


export const deleteAdmins = async (id) => {
    try {
        const response = await fetch(`${'http://localhost:3000/Admins'}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error("Error al eliminar el Administrador");
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};
