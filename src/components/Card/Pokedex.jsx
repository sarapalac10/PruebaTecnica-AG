import React from 'react'
import PokemonCard from './PokemonCard';

const Pokedex = (props) => {
    console.log(props)
    const {pokemons} = props;
return (
    <div>
        <div className='header'>
            <h2>Pokedex</h2>
            <div>Pagination</div>
        </div>
        <div className='pokedex-grid'>
            {pokemons.map((pokemon, idx)=> {
                return(
                    <PokemonCard pokemon={pokemon} key={pokemon.name} />
                )
            })}
        </div>
    </div>
  )
}

export default Pokedex