import React from 'react'
import { CardPokemonIzq } from '../../style/CardMainStyle'
import { CgPokemon } from "react-icons/cg";

const LeftCard = ({pokemon, loading, infoPokemon}) => {
    // console.log(pokemon)
  return (
    <>
    {
        loading ?
        <h1> <CgPokemon/> Loading...</h1>
        :
        pokemon.map((item)=>{
            return(
                <>
                    <CardPokemonIzq className='card' key={item.id} onClick={()=>infoPokemon(item)}>
                        <h2>{item.id}</h2>
                        <img src={item.sprites.front_default} alt=''/>
                        <h2>{item.name}</h2>
                    </CardPokemonIzq>
                </>
        )
        })
    }
    </>
  )
}

export default LeftCard