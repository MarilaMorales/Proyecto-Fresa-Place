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

