import React from 'react'
import Footer from '../components/Footer/Footer'
import Menu from '../components/Menu/Menu'
import NavBar from '../components/NavBar/NavBar'
import { ContainerPrincipalPage } from '../style/PrincipalPageStyle'

const PrincipalPage = () => {
  return (
    <ContainerPrincipalPage>
        <NavBar />
        <Menu />
        <Footer/>
    </ContainerPrincipalPage>
  )
}

export default PrincipalPage