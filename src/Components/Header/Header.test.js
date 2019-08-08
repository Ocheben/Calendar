import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import Calendar from '../Calendar/Calendar';
import App from '../../App';

describe('Header', () => {
  it('should render correctly', () => {
    const component = shallow(
      <App>
        <Calendar><Header /></Calendar>
      </App>
    );

    expect(component).toMatchSnapshot();
  });
});
