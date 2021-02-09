import React from 'react';
import PropTypes from 'prop-types';


const CharacterDetail = ({ name, image, type, species, origin, location }) => (
  <figure>
    <figcaption>{name}</figcaption>
    <img src={image} />
    <ul>
      {species ? <li>{species}</li> : null}
      {origin.name ? <li>{origin.name}</li> : null}
      {location.name ? <li>{location.name}</li> : null}
      {type ? <li>{type}</li> : null}
    </ul>
  </figure>


);

CharacterDetail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  species: PropTypes.string,
  origin: PropTypes.object,
  location: PropTypes.object,
  type: PropTypes.string,

};

export default CharacterDetail;
