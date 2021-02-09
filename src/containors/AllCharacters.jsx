import React, { useState, useEffect } from 'react';
import CharacterList from '../components/characters/CharacterList.jsx';
import { getCharacters } from '../services/fetchApi.js';

const AllCharacters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((characters) => {
      setCharacters(characters);
      setLoading(false);  
      console.log(characters);
    });
  }, []);
  if(loading) return <h1 data-testid="loading">Loading Characters...</h1>;
  // eslint-disable-next-line max-len
  return <div data-testid="main"> <CharacterList characters={characters} /> </div>;
};
export default AllCharacters;


