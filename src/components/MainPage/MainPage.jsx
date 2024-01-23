import React, { useState } from 'react';
import MainContainer from '../Containers/Main'
import PokemonCard from './PokemonCard'
import PokemonData from './PokemonData'

const MainPage = () => {
    const [pokemonInfo, setPokemonInfo] = useState({});

  return (
    <MainContainer>
       <PokemonCard setPokemonInfo={setPokemonInfo} pokemonInfo={pokemonInfo}/>
       <PokemonData pokemonInfo={pokemonInfo}/> 
    </MainContainer>
  );
};

export default MainPage;