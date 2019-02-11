import React from 'react';
import { shallow } from 'enzyme'; // how to mount the component
import toJson from 'enzyme-to-json';
import ComparisonResults from '.';

describe('<ComparisonResults />', () => {
  let wrapper;
  it('renders', () => {
    let obj = {
      brand: 'Bonio',
      caloric: 3,
      fat: 2,
      nnn: 'Heartland Beef Mash',
      protein: 1
    };
    wrapper = shallow(<ComparisonResults formData={obj} />);
  });
  it('matches snapshot', () => {
    const serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });
});
