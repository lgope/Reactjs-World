import React from 'react';
import './popup.styles.css';

// copmonents
import Popup from './Popup.component';
import ImageListPopup from './ImageListPopup.component';

// redux stuff
import { connect } from 'react-redux';
import { filterImage, getImageStyle } from '../../redux/actions/imageActions';

// filter option stuff
import Slider from '../filter/Slider';

// icons
import settingIcon from '../../asstes/settingss.png';

class ImagePopup extends React.Component {
  state = {
    isOpen: false,
    isOptionChanged: false,
    selectedOptionIndex: 0,
    options: this.props.image.filter,
    isPopupOpen: false,
  };
  // show or hide popup popup
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
    return (
      <div>
        <button
          className='settings-btn'
          onClick={() => this.toggle()}
          title='Settings'
        >
          <img src={settingIcon} alt='settings' />
        </button>

        {/* popup detect outside click and close the popover */}
        <Popup onClose={() => this.setState({ isOpen: false })}>
          <div
            className='popup-menu'
            style={{ visibility: this.state.isOpen ? 'visible' : 'hidden' }}
          >
            <div className='popup-header-btn'>
              <button
                className='popup-image-btn'
                onClick={() => this.isOptionChangedToggle()}
              >
                Image
              </button>

              <button
                className='popup-filter-btn'
                onClick={() => this.isOptionChangedToggle()}
              >
                Filter
              </button>
              <hr />
            </div>

            <div className='popup-layout'>
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
                {/* change image button */}
                <button
                  className='popup-change-img-btn'
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
