import React from 'react';
import PropTypes from 'prop-types';



const Character = ({ name, image, type, species }) => (
  <figure>
    <img src={image}/>
    <figcaption>
      <span>{name}</span>
      <span>{type}</span>
      <span>{species}</span>
    </figcaption>

  </figure>
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  image:PropTypes.string.isRequired,
  type:PropTypes.string.isRequired,
  species:PropTypes.string.isRequired,
};
export default Character;
