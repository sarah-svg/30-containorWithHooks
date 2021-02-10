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
      // console.log(characters);
    });
  }, []);
  if(loading) return <div
    text="Loading Characters...">Loading Characters...</div>;
  // eslint-disable-next-line max-len
  return <div placeholder="list">CHARACTER <CharacterList characters={characters} /> </div>;
};
export default AllCharacters;

// 
