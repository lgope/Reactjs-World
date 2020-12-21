import React, { useState } from 'react';
import { DropTarget } from 'react-dnd';
import imageIcon from '../../asstes/image_icon.png';
import CanvasImage from './CanvasImage.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTrash } from '@fortawesome/free-solid-svg-icons';

import ImagePopup from '../modal/ImagePopup.component';

// redux stuff
import { compose } from 'redux';
import { connect } from 'react-redux';
import { deleteImageFromCanvas } from '../../redux/actions/imageActions';

function collect(connect, monitor) {
  console.log('image ', monitor.getItem());
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    image: monitor.getItem(),
  };
}

const Canvas = props => {
  const [isImageOptionPopupOpen, setIsImageOptionPopupOpen] = useState(false);
  const [popupImage, setpopupImage] = useState({});

  const {
    connectDropTarget,
    hovered,
    selectedImages,
    deleteImageFromCanvas,
  } = props;

  const backgroundColor = hovered ? 'lightgreen' : 'white';
  const visibility = selectedImages.length === 12 ? 'hidden' : 'visible';

  const handleSettingsBtn = (e, image) => {
    console.log('hiiiiiiiiiiiiii ', image);
    setpopupImage(image);
    setIsImageOptionPopupOpen(!isImageOptionPopupOpen);
  };

  return connectDropTarget(
    <div className='selected-images'>
      {selectedImages &&
        selectedImages.map((image, i) => (
          <div className='image-container' key={image.char_id}>
            <CanvasImage
              key={image.char_id}
              index={i}
              id={image.char_id}
              image={image}
            />
            <div className='action-btn'>
              {/* setting icon and popup modal */}
              {/* <button
                  className='remove-btn'
                  onClick={(e) => handleSettingsBtn(e, image)}
                  title='Settings'
                >
                  <FontAwesomeIcon icon={faCog} />
                </button> */}
              <ImagePopup image={image} index={i} />|{' '}
              <button
                className='remove-btn'
                onClick={() => deleteImageFromCanvas(image.char_id)}
                title='Remove'
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        ))}

      {/* image drop field */}
      {selectedImages && selectedImages.length > 0 && (
        <div className='drop-field' style={{ backgroundColor, visibility }}>
          <img
            src={imageIcon}
            alt='greenField'
            style={{ paddingTop: '30px', marginTop: '30px' }}
          />
          <p>Drop an image from Media Panel</p>
        </div>
      )}

      {/* showing drop field in middle of the canvas */}
      {selectedImages && selectedImages.length < 1 && (
        <div
          className='middle-drop-field'
          style={{ backgroundColor, visibility }}
        >
          <img
            src={imageIcon}
            alt='greenField'
            style={{ paddingTop: '30px', marginTop: '30px' }}
          />
          <p>Drop an image from Media Panel1</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  selectedImages: state.images.selectedImages,
});

export default compose(
  connect(mapStateToProps, { deleteImageFromCanvas }),
  DropTarget('image', {}, collect)
)(Canvas);
