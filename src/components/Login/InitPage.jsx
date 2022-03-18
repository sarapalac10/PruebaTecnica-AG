import React from 'react'
import { Link } from 'react-router-dom'
import { InitContainer } from '../../style/LoginStyle'
import { ButtonInitPage } from '../../style/PrincipalPageStyle'

const InitPage = () => {
  return (
    <InitContainer>
        <div>
            <img className='imagen-inicio' src='https://res.cloudinary.com/sarapalacio01/image/upload/v1647467865/RetoTecnico/pokemon-logoinicio_qyivfw.svg' alt='' />
        </div>
        <div>
            <Link to='/login' >
                <ButtonInitPage>Click para iniciar</ButtonInitPage>{' '}
            </Link>
        </div>
    </InitContainer>
  )
}

export default InitPage