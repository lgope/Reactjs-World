import React, { useEffect } from 'react';

// components
import Canvas from '../components/canvas/Canvas.component';
import MediaPanel from '../components/MediaPanel.component';

// redux stuff
import { connect } from 'react-redux';
import { getImages } from '../redux/actions/imageActions';

const Home = ({ getImages, images }) => {
  // api call => fetching image
  useEffect(() => {
    getImages();
  }, [getImages]);

  return (
    <div className='app-container'>
      <div className='media-panel'>
        <p className='media-text'>Media Panel</p>
        {images.length ? (
          images.map(image => <MediaPanel key={image.char_id} image={image} />)
        ) : (
          <h4>Loading...</h4>
        )}
      </div>

      {/* selected image panel */}
      <div className='selected-images-panel'>
        <Canvas />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  images: state.images.images,
});

export default connect(mapStateToProps, { getImages })(Home);
