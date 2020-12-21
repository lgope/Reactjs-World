import React, { Component } from 'react';
import { DragSource } from 'react-dnd';

// redux stuff
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addImageToCanvas } from '../redux/actions/imageActions';

// drag functionality
const imageSource = {
  beginDrag(props) {
    console.log('dragging');
    return props.image;
  },

  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }

    // adding new image to canvas
    return props.addImageToCanvas(props.image.char_id);
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
}

class MediaPanel extends Component {
  render() {
    const { connectDragSource, image } = this.props;

    return connectDragSource(
      <img className='images' src={image.img} alt={image.name} />
    );
  }
}

export default compose(
  connect(null, { addImageToCanvas }),
  DragSource('image', imageSource, collect)
)(MediaPanel);
