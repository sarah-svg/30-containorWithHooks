import React, { useState, useEffect } from 'react';
import CharacterDetail from '../components/characters/Chractersdetails.jsx';
import { getOneCharacter } from '../services/fetchApi.js';

const ACharacter = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getOneCharacter().then((characters) => {
      setCharacters(characters);
      setLoading(false);
      console.log(characters);
    }); 
  }, []);
  if(loading) return <h1>loading</h1>;
  return <CharacterDetail  characters={characters}/>;
};

export default ACharacter;
