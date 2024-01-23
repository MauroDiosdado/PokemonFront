import React, { useEffect, useState, useMemo } from 'react';

const PokemonPortrait = (props) => {

  const [pokemonData, setPokemonData] = useState({});
  const {pokemonInfo}=props;
  

  const getPortrait = (pokemonInfo) => {
    if (pokemonInfo.pokemonImage === null) {
      return 'https://www.myneobuxportal.com/wp-content/uploads/2018/04/1-1.jpg';
    } else {
      return pokemonInfo.pokemonImage;
    }
  };

  const pokemonPortrait = useMemo(() => {
    return getPortrait(pokemonInfo)
  }, [pokemonInfo]);

  return (
    <div>
      <h1 onClick={()=>console.log(pokemonInfo)}>{pokemonInfo.pokemonName}</h1>
      <img src={pokemonPortrait} alt="Pokemon Image" style={{ maxWidth: '100%' }} />
    </div>
  );
};

export default PokemonPortrait;