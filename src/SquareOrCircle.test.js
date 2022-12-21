import React from 'react';
import SquareOrCircle from './SquareOrCircle';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Component tests', () => {
  let wrapper = shallow(<SquareOrCircle />);

  it('Dodano poprawnie komponent SquareOrCircle', () => {
    expect(!!wrapper).toBe(true);
  });
  it('SquareOrCircle ma domyślnie szerokość 200px', () => {
    expect(wrapper.find('div').prop('style')).toHaveProperty('width', '200px');
  });
  it('SquareOrCircle ma domyślnie wysokość 200px', () => {
    expect(wrapper.find('div').prop('style')).toHaveProperty('height', '200px');
  });
  it('Dodano prop isCircle który przy wartości true ustawia borderRadius na 50%', () => {
    wrapper = shallow(<SquareOrCircle isCircle={true} />);
    expect(wrapper.find('div').prop('style')).toHaveProperty(
      'borderRadius',
      '50%'
    );
  });
  it('Dodano prop isCircle który przy wartości false ustawia borderRadius na 0', () => {
    wrapper = shallow(<SquareOrCircle isCircle={false} />);
    expect(wrapper.find('div').prop('style')).toHaveProperty('borderRadius', 0);
  });
});
