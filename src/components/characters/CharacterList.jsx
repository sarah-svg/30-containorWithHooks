import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Character from './OneCharacter';

const CharacterList = ({ characters }) => {
  const characterInfo = characters.map(character => (
    <div key={character.id}>
      <Link to={`/detail/${character.id}`}>
        <Character {...character} />
      </Link>
    </div> 
  ));
  return (
    <div  >
      {characterInfo}
    </div>
  );
};
// data-testid="list"
CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    type: PropTypes.string,
    species: PropTypes.string
  })).isRequired
};

export default CharacterList;
