import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal';
import Calendar from '../Calendar/Calendar';
import App from '../../App';

describe('Modal', () => {
  it('should render correctly', () => {
    const component = shallow(
      <App>
        <Calendar><Modal /></Calendar>
      </App>
    );

    expect(component).toMatchSnapshot();
  });
});
