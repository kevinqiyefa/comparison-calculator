import React from 'react';
import { shallow, mount } from 'enzyme'; // how to mount the component
import toJson from 'enzyme-to-json';
import App from './App';
import CalculatorForm from './components/CalculatorForm';
import ComparisonResults from './components/ComparisonResults';

describe('<App />', () => {
  let wrapper;
  it('renders', () => {
    // smoke test!!!
    wrapper = shallow(<App />);
  });
  it('matches snapshot', () => {
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });
});

describe('full rendering and tesing <Calculator> funcitonality', () => {
  let wrapper;
  it('full rendering', () => {
    wrapper = mount(<App />);
    expect(wrapper.find(CalculatorForm).length).toEqual(1);

    wrapper
      .find('.other-food-brands')
      .find('select')
      .find('option')
      .at(1)
      .simulate('change', {
        target: { value: 'Bonio' }
      });

    wrapper
      .find(CalculatorForm)
      .find('.inputs')
      .find('input')
      .at(0)
      .simulate('change', {
        target: { name: 'protein', value: 1 }
      });

    wrapper
      .find(CalculatorForm)
      .find('.inputs')
      .find('input')
      .at(1)
      .simulate('change', {
        target: { name: 'fat', value: 2 }
      });

    wrapper
      .find(CalculatorForm)
      .find('.inputs')
      .find('input')
      .at(2)
      .simulate('change', {
        target: { name: 'caloric', value: 3 }
      });

    let obj = {
      brand: 'Bonio',
      caloric: 3,
      fat: 2,
      nnn: 'Heartland Beef Mash',
      protein: 1
    };
    expect(wrapper.find(CalculatorForm).instance().state).toEqual(obj);
    expect(wrapper.find(ComparisonResults).length).toEqual(1);
  });
});
