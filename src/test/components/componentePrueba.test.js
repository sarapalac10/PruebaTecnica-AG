import ComponentePrueba from "./componentePrueba"
import { shallow } from 'enzyme';

describe('Prueba en Componente Prueba', () => {
    test('Validar render en componente de prueba', () => {
        //Mesa de trabajo
        let saludos = 'Persona que revisa esto :D '
        const wrapper = shallow(<ComponentePrueba saludos={saludos} />)
        expect(wrapper).toMatchSnapshot()
    })
})

