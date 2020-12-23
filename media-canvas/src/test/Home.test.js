import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { render, fireEvent, screen } from './test-utils';
import Home from '../pages/Home.page';
import IMAGES from './imagesTestData';

configure({ adapter: new Adapter() });

describe('testing <Home/> page', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });
  const foo = jest.fn();

  it('Should render a p tag with Media Panel', () => {
    // render(<Home />, { initialState: { images: IMAGES } }, foo)
    expect(wrapper.find('.media-panel p').text()).toBe('Media Panel');
  });

  it('Should render at least one img tag', () => {
    expect(wrapper.find('.media-panel img')).to.have.lengthOf.at.least(1);
  });
});


// NOTE: All test cases will fail because of localStorage
// Test files runs from server side that's why show localStorage is not defined
