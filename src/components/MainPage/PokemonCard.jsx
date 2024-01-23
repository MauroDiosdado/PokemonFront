import React, {useState} from "react";
import { Button } from 'antd';
import axios from "axios";

//Main card, used for displaying main instructions

const PokemonCardMain = (props) => {

  const { setPokemonInfo, pokemonInfo } =props;
  const [count, setCount] = useState({});

  const handleButtonClick = () => {
    const ran = Math.floor(Math.random() * (151 - 1) + 1);

    axios({ baseURL:'http://localhost:8000/api/generate/', params:{pokemon_id:ran} ,  method:'GET'})
    .then(response=> {
      setPokemonInfo( (state) => ({
        ...state, 
        pokemonImage:response.data.pokemon_image,
        pokemonName:response.data.pokemon_name
      }));
    }); 
  };

  return (
    <div>
      <div>
      <h1 >Random Pokemon Selector</h1>
      <Button type="primary" onClick={handleButtonClick}>
        Generate
      </Button>
    </div>
    </div>
  );
};

export default PokemonCardMain;