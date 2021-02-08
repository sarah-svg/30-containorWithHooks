import React from 'react';
import PropTypes from 'prop-types';


const CharacterDetail = ({ name, image, type, species, origin, location }) => (
  <figure>
    <figcaption>{name}</figcaption>
    <img src={image} />
    <ul>
      {species ? <li>{species}</li> : null}
      {origin ? <li>{origin}</li> : null}
      {location ? <li>{location}</li> : null}
      {type ? <li>{type}</li> : null}
    </ul>
  </figure>


);

CharacterDetail.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  species: PropTypes.string,
  origin: PropTypes.string,
  location: PropTypes.string,
  type: PropTypes.string,

};

export default CharacterDetail;
