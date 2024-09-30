import React, { useState, useEffect } from 'react'; 
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import { getUsers } from "../Services/get";
import { getAdmins } from '../Services/get';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import LogoTransparente from "../IMG/LogoTransparente.png";
import "../Styles/Login.css";

function FormLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const navigate = useNavigate();

  // Fetch users and admins from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const userData = await getUsers();
        setUsers(userData);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      }
    };

    const fetchAdmins = async () => {
      try {
        const adminData = await getAdmins();
        setAdmins(adminData);
      } catch (error) {
        console.error("Error al obtener los administradores:", error);
      }
    };

    fetchUsers();
    fetchAdmins();
  }, []);


  
  const Login = async () => {
    setMessage('');
    if (!email || !password) {
      setMessage("Por favor llena todos los campos!");
      return;
    }

    try {
      const admin = admins.find(a => a.email === email);
      if (admin && admin.password === password) {
        localStorage.setItem("Autentificado", "true");
        toast.success("¡Bienvenido Administrador!");
        navigate("/Administracion");
        return;
      }


      const user = users.find(u => {
        if (u.nombre && typeof u.nombre === 'object') {
          return u.nombre.correo === email && u.nombre.password === password;
        }
        return u.correo === email && u.password === password;
      });

      if (user) {
        localStorage.setItem("Autentificado", "true");
        toast.success("¡Usuario entrando a la Pagina!");
        navigate("/Principal");
      } else {
        setMessage('Este usuario no existe.');
      }
    } catch (error) {
      console.error("Error en el proceso de login:", error);
      setMessage('Error en ingreso de datos');
    }

    setEmail('');
    setPassword('');
  };

  const irRegistro = () => {
    navigate("/Registro");
  };

  return (
    <MDBContainer id='fondo12' className="my-5 gradient-form">
    <MDBRow>
      <MDBCol col='12' md='6' className="mb-5"> 
        <div id="login-form" className="d-flex flex-column mx-auto" style={{ maxWidth: "500px" }}>
          {message && <div id="mensajeAlert">{message}</div>}
          <h4 id='TextoLogin' className="mt-1 mb-5 pb-1">LOGIN</h4>
          <p className="text-muted">Please login to your account</p>
          <MDBInput
            wrapperClass='mb-4'
            label='Email address'
            id='form1'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <MDBInput
            wrapperClass='mb-4'
            label='Password'
            id='form2'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="text-center pt-1 mb-5 pb-1">
            <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={Login}>Sign in</MDBBtn>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
            <p className="mb-0">Don't have an account?</p>
            <MDBBtn outline className='mx-2' color='danger' onClick={irRegistro}>
              Register
            </MDBBtn>
          </div>
        </div>
      </MDBCol>
  
      <MDBCol col='12' md='6' className="mb-5">
        <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
          <div className="text-white px-3 py-4 p-md-5 mx-md-4 text-center">
            <img id='logoLogin' src={LogoTransparente} alt="logo" />
          </div>
        </div>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  
  );
}

export default FormLogin;












