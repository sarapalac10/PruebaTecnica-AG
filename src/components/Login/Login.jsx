import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonEnviar, LoginContainer } from '../../style/LoginStyle'
import LoginRegistro from './LoginRegistro'

const Login = () => {
  return (
    <LoginContainer>
        <div>
            <LoginRegistro />
            <h2>Puedes iniciar sin registro</h2>
            <Link to='/principalpage'>
                <ButtonEnviar>Click para iniciar</ButtonEnviar>{' '}
            </Link>
        </div>
    </LoginContainer>

  )
}

export default Login