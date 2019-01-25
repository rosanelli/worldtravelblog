import React from 'react';
import PropTypes from 'prop-types';

const Map = props => (
  <div className="card">
    <div className="card-body">
      <img src={`http://maps.googleapis.com/maps/api/staticmap?center=${props.location}&zoom=${props.zoom}&size=350x250&markers=color:red%7C${props.location}&sensor=false&key=AIzaSyBC8ydXBc7Uo78yhuUUXHUXcsfsf3phhmE`} alt="map" className="img-fluid" />
    </div>
  </div>
)

Map.propTypes = {
  location: PropTypes.string.isRequired,
  zoom: PropTypes.number,
}

Map.defaultProps = {
  zoom: 5
};

export default Map;