import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { url } from '../../routes/url';
import { ButtonEnviar } from '../../style/LoginStyle';
import { ContainerForm, DivProfile, Titulo } from '../../style/profileStyle';

export const Form = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        id: "",
        apellido: "",
        nombre: "",
        email: "",
        password: "",
    });
 
    const {apellido, nombre, email, password } = user;

    const handleOnChange = ( {target} ) => {
        setUser( {
            ...user,
            [target.name] : target.value
        })
    }

    const handleSubmit = (e) => {  
        e.preventDefault()
        setTimeout(() => {
            alert("Será redirigido al inicio");
            navigate('/login');
          },1500)
    }

    const postData = () => {
        if(apellido!== '' && email!== '' && password!== '' && password.length > 5 ){
            axios.post(url, user)
                .then(response => {
                    console.log(response.data)
                }).catch(error => {
                    console.log(error)
                })
                console.log('holaaaaa');
                console.log('password', password)
                console.log(password.length)
                alert("SE HA REGISTRADO EL USUARIO");
        }else{
            alert("La contraseña debe contener mínimo 6 caracteres");
        }
    }

    return (
        <DivProfile>
           <form id="formulario" onSubmit={handleSubmit}>
           <Titulo>Registro de Usuario</Titulo>
           <hr/>
            <ContainerForm className='style-form'>
                <div>
                    <label>Nombre</label>
                    <input className='input-form' id="inputNombre" name="nombre" onChange={handleOnChange} value={nombre} />
                </div>
                <div>
                    <label>Apellido</label>
                    <input className='input-form' id="inputApellido" name="apellido" onChange={handleOnChange} value={apellido} />
                </div>
                <div>
                    <label>Email</label>
                    <input className='input-form' id="inputEmail" name="email" onChange={handleOnChange} value={email} />
                </div>
                <div>
                    <label>Password</label>
                    <input className='input-form' id="inputPassword" type="password" name="password" onChange={handleOnChange} value={password} />
                </div>
            </ContainerForm>
               <div>
                   <ButtonEnviar id="btnRegistro" onClick={postData} >Enviar</ButtonEnviar> 
                </div>
           </form>
        </DivProfile>
    )
}
