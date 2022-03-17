import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getPokemon, getPokemonData, searchPokemon } from '../../api'
import { ContainerBusqueda, FormBuscarPoke, InputBuscar, MenuContainer } from '../../style/MenuStyle'
import Pokedex from '../Card/Pokedex'

const Menu = () => {
  const [search, setSearch] = useState('');
  const [pokemons, setPokemons] = useState();

  const getPokemones = async () => {
    try{
      const data = await getPokemon();
      console.log(data);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.urlPokemon)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
    } catch(error){
      console.log(error)
    }
  }

  useEffect(() => {
    getPokemones();
  }, [])
  

  const onChange = (e) => {
    setSearch(e.target.value);
  }

  const onClick = async (e) => {
    e.preventDefault()
    const data = await searchPokemon(search);
    console.log(data);
    setPokemons(data)
  }

  return (
    <MenuContainer>
        <div>
          <FormBuscarPoke>
                <ContainerBusqueda>
                    <span className="icon"><i className="fa fa-search"></i></span>
                    <InputBuscar 
                      placeholder=' Busca por nombre de Pokemon...'
                      onChange={onChange}
                    />
                </ContainerBusqueda>
                  <button onClick={onClick}> Buscar </button>
          </FormBuscarPoke>
        </div>

        <div>
          <Pokedex pokemon={pokemons} />
        </div>

    </MenuContainer>
  )
}

export default Menu