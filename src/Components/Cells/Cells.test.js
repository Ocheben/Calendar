import React from 'react';
import { shallow } from 'enzyme';
import Cells from './Cells';
import Calendar from '../Calendar/Calendar';
import App from '../../App';

describe('Cells', () => {
  it('should render correctly', () => {
    const component = shallow(
      <App>
        <Calendar><Cells /></Calendar>
      </App>
    );

    expect(component).toMatchSnapshot();
  });
});
