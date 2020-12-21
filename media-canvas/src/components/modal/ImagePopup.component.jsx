import React from 'react';
import settingIcon from '../../asstes/settingss.png';
import './modal.styles.css';

import Popup from './Popup.component';
import ImageListPopup from './ImageListPopup.component';

// redux stuff
import { connect } from 'react-redux';
import { filterImage, getImageStyle } from '../../redux/actions/imageActions';

// filter stuff
import Slider from '../filter/Slider';

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

class ImagePopup extends React.Component {
  state = {
    isOpen: false,
    isOptionChanged: false,
    selectedOptionIndex: 0,
    options: this.props.image.filter,
    isPopupOpen: false,
  };
  // show or hide popup modal
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  // show image change layout or filter layout functionality
  isOptionChangedToggle() {
    this.setState({
      isOptionChanged: !this.state.isOptionChanged,
    });
  }

  // change filter options value
  async handleSliderChange(event) {
    await this.setState({
      options: this.state.options.map(option =>
        option.name === event.target.name
          ? { ...option, value: event.target.value }
          : option
      ),
    });

    // updating filter options
    this.props.filterImage(this.props.image, this.state.options);
  }

  render() {
    // if (!this.props.open) return null;

    console.log('iiimmmsmsm ', this.props.image);

    return (
      <div>
        <button className='settings-btn' onClick={() => this.toggle()}>
          <img src={settingIcon} alt='settings' />
        </button>
        <Popup onClose={() => this.setState({ isOpen: false })}>
          <div
            className='popup-menu'
            style={{ visibility: this.state.isOpen ? 'visible' : 'hidden' }}
          >
            <div className='modal-header-btn'>
              <button
                className='modal-image-btn'
                onClick={() => this.isOptionChangedToggle()}
              >
                Image
              </button>

              <button
                className='modal-filter-btn'
                onClick={() => this.isOptionChangedToggle()}
              >
                Filter
              </button>
              <hr />
            </div>

            <div className='modal-layout'>
              <div className='preview-image-filter'>
                <img
                  className='preview-image'
                  src={this.props.image.img}
                  style={{ filter: this.props.getImageStyle(this.props.image) }}
                  alt=''
                />
              </div>

              <div
                className='change-image-field'
                style={{
                  display: !this.state.isOptionChanged ? 'block' : 'none',
                }}
              >
                {/* <div className='preview-image-filter'>
                <img
                  className='preview-image'
                  src={this.props.image.img}
                  style={{ filter: this.props.getImageStyle(this.props.image) }}
                  alt=''
                />
              </div> */}
                <button
                  className='modal-change-img-btn'
                  onClick={() => this.setState({ isPopupOpen: true })}
                >
                  Change Image
                </button>

                <ImageListPopup
                  open={this.state.isPopupOpen}
                  onClose={() => this.setState({ isPopupOpen: false })}
                  currentImage={this.props.image}
                />
              </div>

              <div
                className='filter-options'
                style={{
                  display: this.state.isOptionChanged ? 'block' : 'none',
                }}
              >
                {/* slider input */}
                {this.state.options.map(option => (
                  <Slider
                    key={option.id}
                    option={option}
                    handleChange={this.handleSliderChange.bind(this)}
                  />
                ))}
              </div>
            </div>
          </div>
        </Popup>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedImages: state.images.selectedImages,
});

export default connect(mapStateToProps, { filterImage, getImageStyle })(
  ImagePopup
);
