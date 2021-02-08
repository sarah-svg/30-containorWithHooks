import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => {
  const characterInfo = characters.map(character => (
    <div key={character.id}>
      <Link to={`/detail/${character.name}`}>
        <Character {...character} />
      </Link>
    </div> 
  ));
  return (
    <div>
      {characterInfo}
    </div>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    type: PropTypes.string,
    species: PropTypes.string
  })).isRequired
};

export default CharacterList;
