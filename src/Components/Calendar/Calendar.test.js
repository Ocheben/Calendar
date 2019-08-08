import React from 'react';
import { shallow } from 'enzyme';
import Calendar from './Calendar';
import App from '../../App';

describe('Calendar', () => {
  it('should render correctly', () => {
    const component = shallow(<App><Calendar debug /></App>);

    expect(component).toMatchSnapshot();
  });
});
