
import { render } from '@testing-library/react';
import React,{useEffect, useState} from 'react';



export default function CardList(props) {

const [pokemon, setPokemon] = useState([])
 console.log(pokemon)
  
  const {monsters} = props.sort((a, b) => a.id - b.id)
  
  useEffect(() => {
    Promise.all(
      monsters.map(async (monster) => {
        const url = monster.url;
        const response = await fetch(
          url
        );
        const data = await response.json();
        return {
          monster
        };
      })
    ).then((monsters) => setPokemon(monsters));
  }, []);

  return (
    <div>
      {pokemon.map((poke) => {
        return (
           <div>{poke.monster.name}</div>
        );
      })}
    </div>
  );
};

