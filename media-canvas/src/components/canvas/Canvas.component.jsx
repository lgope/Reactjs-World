import React from 'react';
import { DropTarget } from 'react-dnd';

// icons
import imageIcon from '../../asstes/image_icon.png';
import deleteIcon from '../../asstes/delete.png';

// components
import CanvasImage from './CanvasImage.component';
import ImagePopup from '../popup/ImagePopup.component';

// redux stuff
import { compose } from 'redux';
import { connect } from 'react-redux';
import { deleteImageFromCanvas } from '../../redux/actions/imageActions';

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver(),
    image: monitor.getItem(),
  };
}

const Canvas = ({
  connectDropTarget,
  hovered,
  selectedImages,
  deleteImageFromCanvas,
}) => {
  const backgroundColor = hovered ? 'lightgreen' : 'white';
  const visibility = selectedImages.length === 12 ? 'hidden' : 'visible';

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
              <ImagePopup image={image} index={i} />|{' '}
              <button
                className='remove-btn'
                onClick={() => deleteImageFromCanvas(image.char_id)}
                title='Remove'
              >
                {/* <FontAwesomeIcon icon={faTrash} /> */}
                <img src={deleteIcon} alt='trash' />
              </button>
            </div>
          </div>
        ))}

      {/* image drop field */}
      {selectedImages && selectedImages.length > 0 && (
        <div className='drop-field' style={{ backgroundColor }}>
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
          <p>Drop an image from Media Panel</p>
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
