import * as actions from '../redux/actions/imageActions';
import * as types from '../redux/actions/actionTypes';

describe('actions', () => {
  const foo = jest.fn();

  // add image to canvas action test
  it('should create an action to add a image at canvas', () => {
    const char_id = 1;
    const expectedAction = () => {
      return {
        type: types.ADD_IMAGE_TO_CANVAS,
        payload: char_id,
      };
    };

    expect(actions.addImageToCanvas(char_id)).toEqual(expectedAction);
  });

  // add image to canvas action test
  it('should create an action to delete a image from canvas', () => {
    const char_id = 1;
    const expectedAction = () => {
      return {
        type: types.DELETE_IMAGE_FROM_CANVAS,
        payload: char_id,
      };
    };

    expect(actions.deleteImageFromCanvas(char_id)).toEqual(expectedAction);
  });
});

// NOTE: All test cases will fail because of localStorage
// Test files runs from server side that's why show localStorage is not defined
