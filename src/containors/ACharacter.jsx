import React, { useState, useEffect } from 'react';
import CharacterDetail from '../components/characters/CharacterDetail.jsx';
import { getOneCharacter } from '../services/fetchApi.js';
import PropTypes from 'prop-types';
// import { useParams } from 'react-router-dom';

const ACharacter = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState(null);
  // const { id } = useParams(); 
  useEffect(() => {
    getOneCharacter(match.params.id)
      .then((characters) => {
    
        setCharacters(characters);
        setLoading(false);
        // console.log(characters, 'hello from the a character page');
      
      });
  }, []);
  if(loading)
    return <h1  data-testid="loading">Loading A Character</h1>;
  return <CharacterDetail {...characters} />;
  // return(<h1>hello</h1>);
};
ACharacter.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};




export default ACharacter;
