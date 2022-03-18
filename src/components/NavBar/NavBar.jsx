import React from 'react'
import { ContainerPokedex, TextPodedex } from '../../style/NavBarStyle'
import { NavBarcontainer, TextoNavBar } from '../../style/PrincipalPageStyle'

const NavBar = () => {
return (
    <NavBarcontainer>
        <div>
          <ContainerPokedex>
            <TextoNavBar>ELIGE TU POKEMON</TextoNavBar>
            {/* <TextPodedex>Mi Pokedex ♡ </TextPodedex> */}
          </ContainerPokedex>
        </div>
    </NavBarcontainer>
  )
}

export default NavBar