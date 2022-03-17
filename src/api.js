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

export const getPokemon = async(limit = 25, offset = 0)=> {
    try {
        let urlPokemon = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        const response = await fetch(urlPokemon);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

export const getPokemonData = async(url) => {
    try {
    const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}