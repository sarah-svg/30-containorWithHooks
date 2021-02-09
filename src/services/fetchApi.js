export const getCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((res) => res.json())
    .then(json => json.results);
};
export const getoneCharacter = (character) => {
  return fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((res) => res.json())
    .then((character) =>
      character.map(({ name, species, type, image }) => ({
        name,
        species,
        text: type, 
        image,
      }))
    );
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
