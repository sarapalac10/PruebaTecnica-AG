import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {  loginFacebook, loginGoogle } from "../redux/actions/actionLogin";
import { useNavigate } from "react-router-dom";
import { ButtonEnviar, ContainerIconos, ImgIconoInicio } from "../../style/LoginStyle";
import { useState } from "react";
import Cookies from 'universal-cookie';
import { useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { url } from "../../routes/url";
import { DivProfile } from "../../style/profileStyle";

const cookies = new Cookies();
const LoginRegistro = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState( {
    email: '',
    password: ''
  })
  const dispatch = useDispatch();
  
  const handleGoogle = () => {
    dispatch(loginGoogle());
    navigate('/principalpage')
  };
  const handleFacebook = () => {
    dispatch(loginFacebook());
    navigate('/principalpage')
  };

  const handleChange= e=>{
    setForm({
            ...form,
            [e.target.name]: e.target.value
    });
}

  const useIniciarSesion=async()=>{
    console.log('form', form)
    await axios.get(url, {params: {email: form.email, password: form.password}})
    .then(response=>{
        console.log('response.data', response.data)
        return response.data;
    })
    .then(response=>{
        if(response.length>0){
            let respuesta = response[0];
            console.log('respuesta', respuesta)
            console.log(respuesta.id);
            cookies.set('id', respuesta.id, {path: "/"});
            cookies.set('apellido', respuesta.apellido, {path: "/"});
            cookies.set('nombre', respuesta.nombre, {path: "/"});
            cookies.set('email', respuesta.email, {path: "/"});
            alert("Bienvenido :D ");
            navigate('/principalpage');
        }else{
            alert('El usuario o la contraseña no son correctos');
        }
    })
    .catch(error=>{
        console.log(error);
    })
}

useEffect(() => {
    if(cookies.get('email')){
        navigate('/principalpage')
    }
})

  return (

  <div className="containerPrincipal-login">
    <div>
        <h1>Iniciar Sesión</h1>
   </div>

  <DivProfile>
    <hr/>
    <div className="form-group">
        <label  >Email: </label>
        <br />
        <input type="text" className="form-control" name="email" onChange={handleChange} placeholder="Ingresa tu email" />
        <br />
        <label>Contraseña: </label>
        <br />
        <input type="password" className="form-control" name="password" onChange={handleChange} placeholder="Ingresa tu contraseña" />
        <br />
        <ButtonEnviar className="btn-login" onClick={useIniciarSesion}>Iniciar Sesión</ButtonEnviar>
        <h2>¿Aún no tienes una cuenta? <Link to="/form" className='link-form'>Inscribirse</Link></h2>
    </div>
  </DivProfile>

      <ContainerIconos>
        <Container className="google-btn" onClick={() => handleGoogle()}>
          <div>
            <ImgIconoInicio
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google button"
            />
          </div>
        </Container>
        <Container className="facebook-btn" onClick={() => handleFacebook()}>
          <div>
            <ImgIconoInicio
              className="facebook-icon"
              src="https://res.cloudinary.com/davidcharif/image/upload/v1647260118/sprint3-proyecto/2021_Facebook_icon.svg_mrabec.png"
              alt="facebook button"
            />
          </div>
        </Container>
      </ContainerIconos>
</div>

  );
};

export default LoginRegistro;
