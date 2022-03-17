import styled from "styled-components";
import '../style/BasicStyle.css'

export const MainCardContainer = styled.div`
    background-color: var(--greyLight);
    font-family: 'Roboto', sans-serif;
    height:100%;
    align-items: center;
`
export const CardContainerInterno = styled.div`
    margin-top:2rem;
    @media only screen and (min-width: 630px) {
        display: flex;
    }
`
export const CardPokemonIzq = styled.div`
    width: 250px;
    border-radius: 1rem;
    background-color: var(--purpleLight);
    box-shadow: 0 5px 5px var(--purple);
    padding: 0  0 0 1.5rem;
    display: flex;
    align-items: center;
    box-sizing: border-box;
`
export const CardPokemonDer = styled.div`
    width:45%;
    text-align: center;
    color: var(--black);
    position: fixed;
    right:0px;
    border-left: 0;
    top: 100px;
`
export const ImgPokedexDer = styled.img`
    height: 100%;
`
export const ButtonDirecciones = styled.button`
    outline: none;
    border: none;
    border-radius:5px;
    height: 30px;
    width:150px;
    padding: 0.3rem 0;
    margin: 1rem;
    font-size: 17px;
    font-weight:  bold;
    color: var(--white);
    background-color: var(--redLight);
`
export const AbilitiesText = styled.h3`
    font-size: 20px;
    text-align: center;
    margin: 1rem;
`
export const AbilitiesContainer = styled.div`
    display: flex;
    justify-content: center;
`
export const StateContainer = styled.div`
    display: flex;
    justify-content: center;
`
