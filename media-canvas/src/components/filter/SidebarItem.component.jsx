import React from 'react';
import './filter.styles.css';
import saturation from '../../asstes/saturation.png';
import blur from '../../asstes/blur-option.png';
import brightness from '../../asstes/brightnessIcon.png';
import contrast from '../../asstes/contrast.png';

const icons = [saturation, blur, brightness, contrast];
const SidebarItem = (props) => (
  <button
    className={`sidebar-item ${props.active ? 'active' : ''}`}
    onClick={() => props.handleClick()}
  >
    {/* {this.props.name} */}
    <img src={icons[props.option.id]} alt={props.option.name} />
  </button>
);

export default SidebarItem;
