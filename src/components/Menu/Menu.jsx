import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { searchPokemon } from '../../api'
import { ButtonBusqueda, ContainerBusquedaPokemon, ContainerPokedex, ImgPokedex } from '../../style/BusquedaPokemon'
import { ButtonIrPokedex, ContainerBusqueda, FormBuscarPoke, InputBuscar, MenuContainer } from '../../style/MenuStyle'
import { CgPokemon } from "react-icons/cg";

const Menu = () => {
  const [search, setSearch] = useState('');
  const [pokemon, setPokemon] = useState();

  // const getPokemones = async () => {
  //   try{
  //     const data = await getPokemon();
  //     console.log(data);
  //     const promises = data.results.map(async (pokemon) => {
  //       return await getPokemonData(pokemon.urlPokemon)
  //     })
  //     const results = await Promise.all(promises)
  //     setPokemon(results)
  //   } catch(error){
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   getPokemones();
  // }, [])
  
  const onChange = (e) => {
    setSearch(e.target.value);
  }
  const onClick = async (e) => {
    e.preventDefault()
    const data = await searchPokemon(search);
    console.log(data);
    setPokemon(data)
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
                  <ButtonBusqueda onClick={onClick}> Buscar </ButtonBusqueda>
          </FormBuscarPoke>
        </div>

    <ContainerBusquedaPokemon>
      <ContainerPokedex>
          {pokemon &&
          <div>
              <h2>Nombre: {pokemon.name}</h2>
              <ImgPokedex src={pokemon.sprites.front_default}  alt='' />
              <div>
                <h3>Altura: {pokemon.height} ft </h3>
                <h3>Peso: {pokemon.weight} kg </h3>
              </div>
          </div>
          }
        </ContainerPokedex>
    </ContainerBusquedaPokemon>

          <div>
          <Link to='/cards' >
                <ButtonIrPokedex> <CgPokemon/>ir a Pokedex</ButtonIrPokedex>{' '}
            </Link>
          </div>

    </MenuContainer>
  )
}

export default Menu