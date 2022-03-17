import styled from "styled-components";
import '../style/BasicStyle.css';

export const ContainerPrincipalPage = styled.div`
    background-color: var(--greyLight);
    background-repeat: no-repeat;
`
export const ButtonInitPage = styled.button`
    margin-top:1rem;
    background-color: var(--redLight);
    border-radius:10px;
    padding:0.5rem;
    font-weight: bold;
    font-size: 1rem;
    &:hover{
        transform:scale(1.15);
        border-color: #ffc600;
        box-shadow: 0 0 10px #ffc600; 
    }
`
export const NavBarcontainer = styled.div`
    position: relative; 
    width: 100%;
    height:40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: flex-end;
    &::before{
        content: "";
        background-image: url(https://res.cloudinary.com/sarapalacio01/image/upload/v1647486913/RetoTecnico/ErVL7GEXEAA3svG_aravca.png);
        position: absolute;
        background-position: center ;
        background-repeat: no-repeat;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        opacity: 0.45;
    }
`
export const TextoNavBar = styled.h1`
    position: relative;
    text-align: center;
`


