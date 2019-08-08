import React from 'react';
import { shallow } from 'enzyme';
import Days from './Days';
import Calendar from '../Calendar/Calendar';
import App from '../../App';

describe('Days', () => {
  it('should render correctly', () => {
    const component = shallow(
      <App>
        <Calendar><Days /></Calendar>
      </App>
    );

    expect(component).toMatchSnapshot();
  });
});
