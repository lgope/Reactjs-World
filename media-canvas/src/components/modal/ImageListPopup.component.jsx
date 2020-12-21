import React, { useState, useRef, useEffect } from 'react';
import ReactDom from 'react-dom';
// import './modal.styles.css';

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
  height: '80%',
  maxWidth: '350px',
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
  height: '699px',
  maxHeight: '700px',
  overflow: 'scroll',
};

// test
/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      console.log('1');
      if (ref.current && ref.current.contains(event.target)) {
        alert('You clicked outside of me!');
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

const ImageListPopup = props => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  const [newImage, setNewImage] = useState(null);

  const handleConfirm = () => {
    if (newImage) {
      props.changeImage(props.currentImage, newImage);
      alert('Image changed successfully!');
      return props.onClose();
    }
    return alert('Please select an image!');
  };

  // handleCancel() {
  //  return setState({newImage: null});
  // }
  // console.log('newi ', newImage);
  const { open, onClose } = props;
  if (!open) return null;
  return ReactDom.createPortal(
    <div>
      <div ref={wrapperRef} style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        {/* <div className='image-list-modal'> */}
        <div className=''>
          <p>Select an image</p>

          <div style={IMAGE_LIST_STYLES}>
            {props.images &&
              props.images.map(image => (
                <input
                  key={image.char_id}
                  className='images selectedimage'
                  type='image'
                  src={image.img}
                  alt={image.name}
                  onClick={() => setNewImage(image)}
                />
              ))}
          </div>

          <div className='imagelist-modal-actionBtn'>
            <button className='img-confirm-btn' onClick={handleConfirm}>
              Confirm
            </button>
            {/* should clear state */}
            <button className='img-cancel-btn' onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
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
