import React from 'react';
import saturation from '../../asstes/saturation.png';
import blur from '../../asstes/blur-option.png';
import brightness from '../../asstes/brightnessIcon.png';
import contrast from '../../asstes/contrast.png';

const icons = [saturation, blur, brightness, contrast];

const Slider = ({ option, handleChange }) => (
  <div className='slider-container'>
    {/* filter option icon */}
    <img src={icons[option.id]} alt={option.name} />
    <input
      type='range'
      className='slider'
      min={option.range.min}
      max={option.range.max}
      value={option.value}
      name={option.name}
      onChange={event => handleChange(event)}
    />
    {`${option.value}${option.unit}`}
  </div>
);
// TODO: Detect mouse out side click
export default Slider;
