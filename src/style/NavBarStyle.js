import styled from "styled-components";
import '../style/BasicStyle.css';

export const ContainerPokedex = styled.div`
    margin-top : 0.5rem;
    display: flex;
    align-items: center;
`
export const TextPodedex = styled.h2`
    font-weight: bold;
    font-size: 1.25rem;
    margin-left: 2rem;
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