import { combineReducers } from 'redux';
import imageReducer from './imageReducer';

export default combineReducers({
  images: imageReducer,
});
