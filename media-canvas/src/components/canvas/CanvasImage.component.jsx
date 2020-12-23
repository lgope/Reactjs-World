import React from 'react';
import PropTypes from 'prop-types';

import { DragSource, DropTarget } from 'react-dnd';
import flow from 'lodash/flow';

// redux stuff
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  updateNewOrder,
  getImageStyle,
} from '../../redux/actions/imageActions';

const imageSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
    };
  },
};

const imageTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Time to actually perform the action
    props.updateNewOrder(dragIndex, hoverIndex);

    // Note: mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  },
};

class CanvasImage extends React.Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isDragging: PropTypes.bool.isRequired,
    id: PropTypes.any.isRequired,
  };

  render() {
    const {
      image,
      isDragging,
      connectDragSource,
      connectDropTarget,
    } = this.props;
    const opacity = isDragging ? 0 : 1;

    const IMAGE_STYLES = {
      filter: this.props.getImageStyle(image),
      opacity,
      width: '100%',
      height: '100%',
      borderRadius: '10px',
    };

    return (
      connectDragSource &&
      connectDropTarget &&
      connectDragSource(
        connectDropTarget(
          <div className='images'>
            <img src={image.img} alt={image.name} style={IMAGE_STYLES} />
          </div>
        )
      )
    );
  }
}

export default compose(
  connect(null, { updateNewOrder, getImageStyle }),
  flow(
    DragSource('card', imageSource, (connect, monitor) => ({
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging(),
    })),
    DropTarget('card', imageTarget, connect => ({
      connectDropTarget: connect.dropTarget(),
    }))
  )
)(CanvasImage);
