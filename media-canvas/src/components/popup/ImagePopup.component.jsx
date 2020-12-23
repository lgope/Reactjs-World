import React, { useState } from 'react';
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
import settingIcon from '../../images/settingss.png';

const ImagePopup = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOptionChanged, setIsOptionChanged] = useState(false);
  const [filterOptions, setFilterOptions] = useState(props.image.filter);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // show or hide popup popup
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // show image change layout or filter layout functionality
  const isOptionChangedToggle = () => {
    setIsOptionChanged(!isOptionChanged);
  };

  // change filter options value
  const handleSliderChange = event => {
    const updatedFilterOptions = filterOptions.map(option =>
      option.name === event.target.name
        ? { ...option, value: event.target.value }
        : option
    );

    // updating filter options
    props.filterImage(props.image, updatedFilterOptions);

    // updating state filter options
    setFilterOptions(updatedFilterOptions);
  };

  return (
    <div>
      <button className='settings-btn' onClick={toggle} title='Settings'>
        <img src={settingIcon} alt='settings' />
      </button>

      {/* popup detect outside click and close the popover */}
      <Popup onClose={() => setIsOpen(false)}>
        <div
          className='popup-menu'
          style={{ visibility: isOpen ? 'visible' : 'hidden' }}
        >
          <div className='popup-header-btn'>
            <button className='popup-image-btn' onClick={isOptionChangedToggle} style={{backgroundColor: !isOptionChanged ? 'bisque' : 'white'}}>
              Image
            </button>

            <button
              className='popup-filter-btn'
              onClick={isOptionChangedToggle}
              style={{backgroundColor: isOptionChanged ? 'bisque' : 'white'}}
            >
              Filter
            </button>
            <hr />
          </div>

          <div className='popup-layout'>
            <div className='preview-image-filter'>
              <img
                className='preview-image'
                src={props.image.img}
                style={{ filter: props.getImageStyle(props.image) }}
                alt=''
              />
            </div>

            <div
              className='change-image-field'
              style={{
                display: !isOptionChanged ? 'block' : 'none',
              }}
            >
              {/* change image button */}
              <button
                className='popup-change-img-btn'
                onClick={() => setIsPopupOpen(true)}
              >
                Change Image
              </button>

              <ImageListPopup
                open={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
                currentImage={props.image}
              />
            </div>

            <div
              className='filter-options'
              style={{
                display: isOptionChanged ? 'block' : 'none',
              }}
            >
              {/* slider input */}
              {filterOptions.map(option => (
                <Slider
                  key={option.id}
                  option={option}
                  handleChange={handleSliderChange}
                />
              ))}
            </div>
          </div>
        </div>
      </Popup>
    </div>
  );
};

const mapStateToProps = state => ({
  selectedImages: state.images.selectedImages,
});

export default connect(mapStateToProps, { filterImage, getImageStyle })(
  ImagePopup
);
