import React, { useState, useEffect } from 'react';
import CharacterDetail from '../components/characters/CharacterDetail.jsx';
import { getOneCharacter } from '../services/fetchApi.js';
import { useParams } from 'react-router-dom';

function ACharacter() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const { id } = useParams(); 
  useEffect(() => {
    
    getOneCharacter(id).then((characters) => {
    
      setCharacters(characters);
      setLoading(false);
      console.log(characters, 'hello from the a character page');
      
    });
  }, []);
  if(loading)
    return <h1  data-testid="loading">Loading A Character</h1>;
  return <CharacterDetail {...characters} />;
  // return(<h1>hello</h1>);
}

export default ACharacter;
