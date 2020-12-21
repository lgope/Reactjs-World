import React from 'react';

const Slider = props => (
  <div className='slider-container'>
    <input
      type='range'
      className='slider'
      min={props.min}
      max={props.max}
      value={props.value}
      onChange={event => props.handleChange(event)}
    />
    {`${props.value} ${props.unit}`}
  </div>
);
// TODO: Detect mouse out side click
export default Slider;
