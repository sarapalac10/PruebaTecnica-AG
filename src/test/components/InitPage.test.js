import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import InitPage from '../../components/Login/InitPage'


describe('Pruebas en componente InitPage', () => {
    test('Validación de render de InitPage', () => {
    //Crear la mesa de trabajo
        const wrapper = shallow(<InitPage />)
        expect(wrapper).toMatchSnapshot()
})
})