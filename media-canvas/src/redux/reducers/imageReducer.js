import * as actions from '../actions/actionTypes';
import DEFAULT_OPTIONS from '../../components/filter/defaultFilterOptions';

// state update
const update = require('immutability-helper');

const initialState = {
  images: [],
  selectedImages: JSON.parse(localStorage.getItem('selectedImages') || '[]'),
  isLoading: false,
};

export default function testFunc(state = initialState, action) {
  switch (action.type) {
    case actions.GET_IMAGES:
      return {
        ...state,
        images: action.payload,
        isLoading: false,
      };

    case actions.ADD_IMAGE_TO_CANVAS:
      const image = state.images.filter(
        img => img.char_id === action.payload
      )[0];

      // by default filter is empty
      image.filter = DEFAULT_OPTIONS;

      // checking total length
      // checking already image exits or not
      // then adding the image
      if (state.selectedImages.length > 11) {
        alert('Limit is over!');
        return state;
      } else if (state.selectedImages.some(img => img.img === image.img)) {
        alert('Already added this image. Please try different');
        return state;
      } else {
        // updating the localstorage
        localStorage.setItem(
          'selectedImages',
          JSON.stringify(state.selectedImages.concat(image))
        );

        // updating the state
        return {
          ...state,
          selectedImages: state.selectedImages.concat(image),
          isLoading: false,
        };
      }

    case actions.DELETE_IMAGE_FROM_CANVAS:
      let images = state.selectedImages;

      images = images.filter(image => image.char_id !== action.payload);

      localStorage.setItem('selectedImages', JSON.stringify(images));

      //   this.setState({ selectedImages: images });
      return {
        ...state,
        selectedImages: images,
        isLoading: false,
      };

    // updating new sequence after image sort or moved
    case actions.UPDATE_IMAGE_ORDER:
      const dragCard = state.selectedImages[action.dragIndex];

      //   updating order and save new array
      const newOrderedSelectedImages = update(state, {
        selectedImages: {
          $splice: [
            [action.dragIndex, 1],
            [action.hoverIndex, 0, dragCard],
          ],
        },
      });

      // updating local storage
      localStorage.setItem(
        'selectedImages',
        JSON.stringify(newOrderedSelectedImages.selectedImages)
      );

      return {
        ...state,
        selectedImages: newOrderedSelectedImages.selectedImages,
      };

    // updating image filter
    case actions.FILTER_IMAGE:
      const updatedCanvasImages = state.selectedImages.map(image =>
        image.img === action.currentImage.img
          ? { ...action.currentImage, filter: action.filterOptions }
          : image
      );

      // updating local storage
      localStorage.setItem(
        'selectedImages',
        JSON.stringify(updatedCanvasImages)
      );

      return {
        ...state,
        selectedImages: updatedCanvasImages,
      };

    // change image from selected canvas image
    case actions.CHANGE_IMAGE:
      action.newImage.filter = DEFAULT_OPTIONS;
      const changedCanvasImages = state.selectedImages.map(image =>
        image.img === action.currentImage.img ? { ...action.newImage } : image
      );

      // updating local storage
      localStorage.setItem(
        'selectedImages',
        JSON.stringify(changedCanvasImages)
      );

      return {
        ...state,
        selectedImages: changedCanvasImages,
      };

    case actions.IMAGES_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
