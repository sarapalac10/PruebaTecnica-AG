export const searchPokemon = async(pokemon) => {
    try {
        let urlPokemon = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(urlPokemon);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const getPokemonEvolucion = async(id)=> {
    try {
        let urlPokemonEvol = `https://pokeapi.co/api/v2/evolution-chain/${id}/` 
        const response = await fetch(urlPokemonEvol)       
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}