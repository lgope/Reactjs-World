import React from 'react';
import './filter.styles.css';
import saturation from '../../asstes/saturation.png';
import blur from '../../asstes/blur-option.png';
import brightness from '../../asstes/brightnessIcon.png';
import contrast from '../../asstes/contrast.png';

const icons = [saturation, blur, brightness, contrast];
const SidebarItem = ({active, option, handleClick}) => (
  <button
    className={`sidebar-item ${active ? 'active' : ''}`}
    onClick={() => handleClick()}
    title={option.name}
  >
    <img src={icons[option.id]} alt={option.name} />
  </button>
);

export default SidebarItem;
