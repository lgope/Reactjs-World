import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { render, fireEvent, screen } from './test-utils'
import Home from '../pages/Home.page';
import IMAGES from './imagesTestData';



configure({adapter: new Adapter()});
it("Should render a p tag with Media Panel", () => {
    const mockAddTodo = jest.fn()
    render(<Home />, { mockAddTodo, initialState: { images: IMAGES } })
    expect(wrapper.find("p").text()).toBe("Media Panel");
})

it("Should render a p tag with Media Panel", () => {
    const mockAddTodo = jest.fn()
    render(<Home />, { mockAddTodo, initialState: { images: IMAGES } })
    expect(wrapper.find("p").text()).toBe("Media Panel");
})

