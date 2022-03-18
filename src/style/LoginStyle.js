import styled from "styled-components";
import '../style/BasicStyle.css'

export const InitContainer = styled.div`
    background-color: var(--greyLight);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`
export const FormInicio = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 20px;
    margin-top: 15px;
`
export const FormInputs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width:60%;
    margin-bottom:1rem;
`
export const InputInicio = styled.input`
    margin-top:0;
    background-color: var(--white);
    padding: 0.5rem;
    border: 1px solid var(--grey);
    border-radius: 20px;
    &::placeholder{
        font-size:15px;
        text-align: center;
    }
    &:focus{
        background-color: var(--white);
    }
`
export const ButtonEnviar = styled.button`
    background-color: var(--redLight);
    border-radius:10px;
    padding:0.5rem 1.5rem;
    font-weight: bold;
    font-size: 1.25rem;
`
export const ContainerIconos = styled.div`
    display: flex;
    margin-top: 2rem;
`
export const ImgIconoInicio = styled.img`
    width: 50px;
    margin: 1rem;
`
export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:1rem;
    border-radius:10px;
    font-weight: bold;
    font-size: 1rem;
    margin-right: auto;
    margin-left: auto;
    background-image: url('https://res.cloudinary.com/sarapalacio01/image/upload/v1647486955/RetoTecnico/animanga-6_316188_upjmca.jpg');  
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
`


