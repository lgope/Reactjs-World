import React from 'react';
import './slider.styles.css';

// icons
import saturation from '../../images/saturation.png';
import blur from '../../images/blur-option.png';
import brightness from '../../images/brightnessIcon.png';
import contrast from '../../images/contrast.png';

const icons = [saturation, blur, brightness, contrast];

const Slider = ({ option, handleChange }) => (
  <div className='slider-container'>
    {/* filter option icon */}
    <img src={icons[option.id]} alt={option.name} />
    <input
      type='range'
      className='range'
      min={option.range.min}
      max={option.range.max}
      value={option.value}
      name={option.name}
      step={1}
      onChange={handleChange}
    />
    <span>{`${option.value}${option.unit}`}</span>
  </div>
);

export default Slider;
