import { useEffect, useState  } from "react"
import axios from 'axios'

export const UseFetch = (urlPokemon) => {
    const [resultado, setResultado] = useState({cargando: true, data: null})
    
    // axios(urlPokemon)
    // .then( function (response) {
    //     console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error){
    //     console.log(error)
    // });
    // return resultado;

    useEffect(() => {
      getDatos(urlPokemon)
    },[urlPokemon])
   
    async function getDatos(urlPokemon) {
        try {
            setResultado({cargando: true, data:null})
            const resp = await fetch(urlPokemon);
            const data = await resp.json();
            setResultado({cargando:false, data})
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    return resultado;

}