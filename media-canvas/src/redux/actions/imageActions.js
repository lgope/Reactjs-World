import * as actions from './actionTypes';

export const getImages = () => dispatch => {
  dispatch(setImagesLoading());
  fetch('https://www.breakingbadapi.com/api/characters?limit=20')
    .then(res => res.json())
    .then(res =>
      dispatch({
        type: actions.GET_IMAGES,
        payload: res,
      })
    )
    .catch(err => console.log('err ', err.response));
};

export const addImageToCanvas = char_id => dispatch => {
  dispatch({
    type: actions.ADD_IMAGE_TO_CANVAS,
    payload: char_id,
  });
};

export const deleteImageFromCanvas = char_id => dispatch => {
  dispatch({
    type: actions.DELETE_IMAGE_FROM_CANVAS,
    payload: char_id,
  });
};

export const updateNewOrder = (dragIndex, hoverIndex) => dispatch => {
  dispatch({
    type: actions.UPDATE_IMAGE_ORDER,
    dragIndex,
    hoverIndex,
  });
};

export const filterImage = (currentImage, filterOptions) => dispatch => {
  dispatch({
    type: actions.FILTER_IMAGE,
    currentImage,
    filterOptions,
  });
};

export const changeImage = (currentImage, newImage) => dispatch => {
  dispatch({
    type: actions.CHANGE_IMAGE,
    currentImage,
    newImage,
  });
};

export function setImagesLoading() {
  return {
    type: actions.IMAGES_LOADING,
  };
}
