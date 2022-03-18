import '@testing-library/jest-dom'
import { loginTypes } from '../../components/redux/types/loginTypes'

describe('Verificar types', ()=>{
    test('comprobar la estructura de types', () =>{
        //Creo mesa de trabajo
        expect(loginTypes).toEqual({
            login: 'login',
            logout: 'logout',
            register: 'register'
        })
    })


})