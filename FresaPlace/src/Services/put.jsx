

export const updateProductos = async (id, Productos) => {
    try {
        const response = await fetch(`http://localhost:3000/productos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Productos),
        });
        if (!response.ok) {
            throw new Error('Error al actualizar Producto');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};


