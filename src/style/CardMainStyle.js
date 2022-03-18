import styled from "styled-components";
import '../style/BasicStyle.css'

export const MainCardContainer = styled.div`
    background-color: var(--greyLight);
    font-family: 'Roboto', sans-serif;
    height:100%;
`
export const CardContainerInterno = styled.div`
    margin-top:2rem;
    flex-direction: column;
    @media only screen and (min-width: 630px) {
        display: flex;
        flex-direction: row-reverse;
    }
`
export const CardPokemonIzq = styled.div`
    display: flex;
    align-items: center;
    margin-left: 15%;
    width: 230px;
    border-radius: 1rem;
    background-color: var(--purpleLight);
    box-shadow: 0 5px 5px var(--purple);
    padding: 2.5px;
    @media only screen and (min-width: 630px) {
        padding: 0  0 0 1.5rem;
    }
`
export const CardPokemonDer = styled.div`
    text-align: center;
    color: var(--black);
    margin-left: auto;
    margin-right: auto;
    @media only screen and (min-width: 630px) {
        position: fixed;
        right:2rem;
        border-left: 0;
        top: 100px;
        width:40%;
    }
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
    font-size: 15px;
    text-align: center;
    margin: 1rem;
    @media only screen and (min-width: 630px) {
        font-size: 20px;
    }
`
export const AbilitiesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (min-width: 630px) {
        display: flex;
    }
`
export const StateContainer = styled.div`
    display: flex;
    justify-content: center;
`
