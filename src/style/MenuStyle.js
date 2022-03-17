import styled from "styled-components";
import '../style/BasicStyle.css';

export const MenuContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
` 
export const FormBuscarPoke = styled.form`
    display: flex;
    width:100%;
    justify-content: center;
    align-items: center;
`
export const ContainerBusqueda= styled.div`
    display: flex;
    width: 50vh;
    align-items: center;
    `
export const ButtonBuscar = styled.button`
    border: none;
    background-color: transparent;
    &:hover{
        transform:scale(1.15);
        border-color: #ffc600;
        box-shadow: 0 0 10px #ffc600;
    }
`
export const InputBuscar = styled.input`
    position: relative;
    /* background-color: var(--blueLight); */
    background-color: transparent;
    width: 100%;
    height:2rem;
    border: none;
    &:focus{
        background-color: var(--white);
    }
    &::placeholder{
        color: var(--black);
        font-size: 15px;
    }
`

export const ButtonIrPokedex = styled.div`
    margin-top: 2rem;
    display: flex;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.5rem;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: var(--redLight);
    border: 1px solid var(--red);
    border-radius: 20px;
    width: max-content;
    margin-left: auto;
    margin-right: auto;
    color: var(--white);
    border-right: 5px solid var(--red);
    &:visited{
        text-decoration: none;
    }
`