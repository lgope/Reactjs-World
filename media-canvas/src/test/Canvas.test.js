import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Canvas from '../components/canvas/Canvas.component'


configure({ adapter: new Adapter() });

describe('testing <Home/> page', () => {
  let wrapper;
  const foo = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<Canvas />);
  });

  it('Should render at least one img tag', () => {
    expect(wrapper.find('.selected-images img')).to.have.lengthOf.at.least(1);
  });
});


// NOTE: All test cases will fail because of localStorage
// Test files runs from server side that's why show localStorage is not defined
