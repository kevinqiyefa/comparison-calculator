import React from 'react';
import { shallow } from 'enzyme'; // how to mount the component
import toJson from 'enzyme-to-json';
import CalculatorForm from '.';

describe('<CalculatorForm />', () => {
  let wrapper;
  it('renders', () => {
    // smoke test!!!
    wrapper = shallow(<CalculatorForm />);
  });
  it('matches snapshot', () => {
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });
});
