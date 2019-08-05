import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Right_Window from './Right_Window';

configure({ adapter: new Adapter() });

const name = 'Thanh Thanh';
describe('<Right_Window/>', () => {
  it('should render nameProfileSelected equal to props.nameProfileSelected', () => {
    const wrapper = shallow(<Right_Window nameProfileSelected={name} />);

    expect(
      wrapper
        .find('#eqTitle')
        .at(0)
        .text()
    ).toBe('Thanh Thanh');
  });
});
