import React, { useState } from 'react';
import ReactDom from 'react-dom';

// styles
import './popup.styles.css'

// popup detect out side click
import Popup from './Popup.component';

// redux stuff
import { connect } from 'react-redux';
import { changeImage } from '../../redux/actions/imageActions';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  padding: '10px',
  height: '90%',
  maxWidth: '20%',
  borderRadius: '5px',
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000,
};

const IMAGE_LIST_STYLES = {
  height: '85%',
  maxHeight: '90%',
  overflow: 'scroll',
};

const ImageListPopup = props => {
  const [newImage, setNewImage] = useState(null);

  const handleConfirm = () => {
    if (newImage) {
      props.changeImage(props.currentImage, newImage);
      alert('Image changed successfully!');
      return props.onClose();
    }
    return alert('Please select an image!');
  };

  const handleCancel = () => {
    setNewImage(null);
    props.onClose();
  };

  const { open } = props;
  if (!open) return null;
  return ReactDom.createPortal(
    <div style={OVERLAY_STYLES}>
      {/* popup detect outside click and close the popover */}
      <Popup onClose={handleCancel}>
        <div style={MODAL_STYLES}>
        {/* <div className="popup-img-list-modal-styles"> */}
          {/* <div className=''> */}
            <p>Select an image</p>

            <div style={IMAGE_LIST_STYLES}>
              {props.images &&
                props.images.map(image => (
                  <input
                    key={image.char_id}
                    className='popup-image'
                    type='image'
                    src={image.img}
                    alt={image.name}
                    onClick={() => setNewImage(image)}
                  />
                ))}
            </div>

            <div className='imagelist-popup-actionBtn'>
              <button className='img-confirm-btn' onClick={handleConfirm}>
                Confirm
              </button>
              {/* clear state and close the popup */}
              <button className='img-cancel-btn' onClick={handleCancel}>
                Cancel
              </button>
            </div>
          {/* </div> */}
        </div>
      </Popup>
    </div>,
    document.getElementById('portal')
  );
};

const mapStateToProps = state => ({
  // excluding images which already added to canvas
  images: state.images.images.filter(
    i => !state.images.selectedImages.find(f => f.img === i.img)
  ),
});

export default connect(mapStateToProps, { changeImage })(ImageListPopup);
