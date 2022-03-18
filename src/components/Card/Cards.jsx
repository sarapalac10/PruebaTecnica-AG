import React from 'react'
import { ButtonDirecciones, CardContainerInterno, MainCardContainer } from '../../style/CardMainStyle'
import LeftCard from './LeftCard'
import RightCard from './RightCard'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ButtonInitPage } from '../../style/PrincipalPageStyle'

const Cards = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState();

    const pokeFun = async() => {
        setLoading(true);
        const res = await axios.get(url);
        // console.log('res', res.data.results);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results);
        setLoading(false);
        //console.log('pokeData', pokeData);
    }

    const getPokemon = async(res) => {
        res.map(async(item) => {
            // console.log('item.url', item.url)
            const result = await axios.get(item.url);
            setPokeData(state=> {
                state=[...state,result.data]
                state.sort((a,b) => a.id>b.id?1:-1)
                return state;
            })
        })
    }

    useEffect(() => {
      pokeFun();
    },[url])
    
  return (
    <MainCardContainer>
           <Link to='/principalpage'>
                <ButtonInitPage>Click para volver</ButtonInitPage>{' '}
            </Link>
        <CardContainerInterno className="container">

        <div className="right-content">
                <RightCard data={pokeDex} />
        </div>

            <div className="left-content">
                <LeftCard pokemon={pokeData} loading={loading} infoPokemon={poke=> setPokeDex(poke)} />
                <div className='btn-group'>
                    { prevUrl && <ButtonDirecciones onClick={()=>{ 
                        setPokeData([]) 
                        setUrl(prevUrl)}} >
                        Previous</ButtonDirecciones> }
                    { nextUrl && <ButtonDirecciones onClick={()=>{
                        setPokeData([])
                        setUrl(nextUrl)
                        }} >
                        Next</ButtonDirecciones>}
                </div>
            </div> 


  
        </CardContainerInterno>

    </MainCardContainer>
  )
}

export default Cards