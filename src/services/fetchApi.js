export const getCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then(json => json.results);
};
export const getOneCharacter = (character) => {
  return fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((res) => res.json());
 
};
  
// return fetch('https://rickandmortyapi.com/api/character')
//   .then((res) => res.json())
//   .then((character) =>
//     character.map(({ name, species, type, image }) => ({
//       name,
//       species,
//       text: type, 
//       image,
//     }))
//   );
