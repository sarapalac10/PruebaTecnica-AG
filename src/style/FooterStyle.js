import styled from "styled-components";
import '../style/BasicStyle.css';

export const FooterContainer = styled.div`
    min-height: 100vh;
    position:relative;
`
export const LinkPerfil = styled.a`
    margin: 15px;
    color: var(--blueDark);
`
export const TextoFooter = styled.div`
    background-color: var(--blueLight);
    font-size: 20px;
    color: var(--blueDark);
    width:100%;
    position: absolute;
    bottom: 1rem;
    @media only screen and (min-width: 366px) {
        font-size: 25px;
    }
`
