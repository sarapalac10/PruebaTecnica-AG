import React from 'react'
import { AbilitiesContainer, AbilitiesText, CardPokemonDer, ImgPokedexDer, StateContainer } from '../../style/CardMainStyle'

const RightCard = ({data}) => {

  console.log(data)
  return (
    <CardPokemonDer>
      {
        (!data)?'':(
          <>
            <h1 className='poke-title'>{data.name}</h1>
            <ImgPokedexDer src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt='' />
            <AbilitiesContainer className='abilities'>
              <h2>Abilities:</h2>
              {
                
                data.abilities.map(poke=>{
                    return(
                      <>
                      <div className='group'>
                        <AbilitiesText>{poke.ability.name}</AbilitiesText>
                      </div>
                      </>
                    ) 
                    })
              }
            </AbilitiesContainer>

            <StateContainer className='abilities'>
              <div>
                <h2>Stats:</h2>
              </div>
              <div>
                {
                  data.stats.map(poke=>{
                      return(
                        <>
                        <div className='group'>
                          <AbilitiesText>{poke.stat.name}: {poke.base_stat}</AbilitiesText>
                        </div>
                        </>
                      ) 
                      })
                }

              </div>
            </StateContainer>

            <h2>Evolucion</h2>

          </>
        )
      }

    </CardPokemonDer>
  )
}
export default RightCard