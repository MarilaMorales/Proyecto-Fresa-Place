export const postUser = async (user) => {
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
  
      if (!response.ok) {
        throw new Error('Error al registrar el usuario');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error al guardar el usuario:', error);
      throw error;
    }
  };
  





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



export const postQuotes = async (quotes) => {
    try {
        const response = await fetch('http://localhost:3000/quotes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(quotes),
        });
        if (!response.ok) {
            throw new Error('Error al agregar el Qoute ');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const postAdmins = async (Admins) => {
    try {
        const response = await fetch("http://localhost:3000/Admins", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Admins),
        });
        if (!response.ok) {
            throw new Error("Error al agregar el Administrador");
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};





// export {postUser}