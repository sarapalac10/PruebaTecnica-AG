import React from 'react'
import { BsLinkedin, BsGithub} from "react-icons/bs";
import { CgPokemon } from "react-icons/cg";
import { FooterContainer, LinkPerfil, TextoFooter } from '../../style/FooterStyle';

const Footer = () => {
  return (
    <FooterContainer>
        <TextoFooter>
            <CgPokemon className='link-perfil' />   Desarrollado por Sara Palacio
            <LinkPerfil href='https://www.linkedin.com/in/sara-palacio-01/'><BsLinkedin /></LinkPerfil>
            <LinkPerfil href='https://github.com/sarapalac10' ><BsGithub /></LinkPerfil>
            
        </TextoFooter>

    </FooterContainer>
  )
}

export default Footer