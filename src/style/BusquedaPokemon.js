import styled from "styled-components";
import '../style/BasicStyle.css'

export const ContainerBusquedaPokemon = styled.div`
    font-size: 2rem;
    display: flex;
    justify-content: center;
    width: inherit;
    transition: 1s;
    z-index: 2;
    margin-top:2rem;
`
export const ContainerPokedex = styled.div`
    border: solid 1px blue;
    background: var(--red);
    width: max-content;
    height: calc(100% - 6rem);
    border: 1px solid black;
    box-sizing: border-box;
    border-radius: 10px 0 0px 10px;
    border-left: 10px solid #9b0a21;
`
export const ImgPokedex = styled.img`
    width: 60%;
    background-color: var(--white);
    padding: 0.5rem;
    margin:1rem;
`
export const Pokedex = styled.div`
    padding: 0.5rem;
`
export const ButtonBusqueda = styled.button`
    background-color: var(--redLight);
    border-radius:10px;
    padding:0.5rem;
    font-weight: bold;
    font-size: 1rem;
    /* &:hover{
        transform:scale(1.15);
        border-color: #ffc600;
        box-shadow: 0 0 10px #ffc600; 
    } */
`