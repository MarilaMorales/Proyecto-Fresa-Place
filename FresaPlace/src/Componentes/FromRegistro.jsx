import React, { useState, useEffect } from 'react';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBRow, MDBCol, MDBCheckbox } from 'mdb-react-ui-kit';
import { postUser } from '../Services/post';
import { getUsers } from "../Services/get";
import { useNavigate } from "react-router-dom";
import '../Styles/Registro.css';





function FormRegistro() {
  const [username, setUsername] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
      }
    };
    fetchUsers();
  }, []);  

  







  const guardarUser = async (e) => {
    e.preventDefault();
    setMessage(''); 
  
    if (!username || !email || !password || !confirmPassword) {
      setMessage("No dejes campos en blanco");
      return;
    }
  
    if (password !== confirmPassword) {
      setMessage("Las contraseñas no coinciden");
      return;
    }
  
    const validarUser = users.find(user => user.correo === email);
  
    if (validarUser) {
      setMessage("Email ya se encuentra registrado");
      return;
    }
  
    try {
      // Aquí es donde está el error
      const UsuarioFresa = { 
        nombre: username, // Este es el nombre del usuario
        correo: email, 
        password: password 
      };
  
      await postUser(UsuarioFresa);
      setMessage("¡Registro exitoso!");
      navigate("/login"); 
  
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      
    } catch (error) {
      console.error("Error en el Registro", error);
      setMessage("Error");
    }
  };
  





  return (
    <MDBContainer id='fondoRegistro2' fluid className='my-5'>
      <MDBRow className='g-0 justify-content-center'>
        <MDBCol md='11'>
          <MDBCard className='my-5' style={{background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)'}}>
            <MDBCardBody className='p-5 shadow-5 text-center'>
              <h2 id='TextRegistro5' className="fw-bold mb-5">Sign up now</h2>

              <form id='formlogin54' onSubmit={guardarUser}>
                <MDBRow>
                  <MDBCol md='8'>
                    <MDBInput
                      wrapperClass='mb-4'
                      label='Username'
                      id='username'
                      type='text'
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </MDBCol>

                  <MDBCol md='6'>
                    <MDBInput
                      wrapperClass='mb-4'
                      label='Email'
                      id='email'
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </MDBCol>
                </MDBRow>

                <MDBInput
                  wrapperClass='mb-4'
                  label='Password'
                  id='password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <MDBInput
                  wrapperClass='mb-4'
                  label='Confirm Password'
                  id='confirmPassword'
                  type='password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />

                <MDBBtn id='btnRegistro1' className='w-100 mb-4' size='md' type='submit'>
                  Sign up
                </MDBBtn>

                {message && <div className="alert" style={{ color: 'red' }}>{message}</div>}
              </form>


            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default FormRegistro;
