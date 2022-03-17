import styled from "styled-components";
import '../style/BasicStyle.css';

export const MenuContainer = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
` 
export const FormBuscarPoke = styled.form`
    display: flex;
    border: 1px solid red;
    width:100%;
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