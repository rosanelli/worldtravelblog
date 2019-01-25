import React from 'react';
import PropTypes from 'prop-types';

const Video = props => (
  <div className="embed-responsive embed-responsive-16by9">
    <iframe
      title={props.video}
      className="embed-responsive-item"
      src={`https://www.youtube.com/embed/${props.video}`} allowfullscreen>
    </iframe>
  </div>
)

Video.propTypes = {
  video: PropTypes.string.isRequired
}

export default Video;