import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import PokemonCollection from './components/PokemonCollection';
import { TypePokemon} from "./interface" //apple type pokemon

interface TypePokemons { //type plus+ pokemon
  name : string,
  url: string
}


function App() {
const [pokemons, setPokemons] = useState<TypePokemon[]>([]) //recois type 01pokemon
const [nextUrl, setNextUrl] = useState<string>("") //ecoute le changement pour afficher les pokemon suivant
const [prevUrl, setPrevUrl] = useState<string>("") //ecoute le changement pour afficher les pokemon precedent

useEffect(()=>{
     const getPokemons = async ()=>{
      const res = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=20"
        )
         setNextUrl(res.data.next) //valeur des urlPokemon suivant
         setPrevUrl(res.data.next) //valeur des urlPokemon precedent

         //fontion parcour et affiche tout les pokemon trouvé
        res.data.results.forEach(async (pokemon : TypePokemons) =>{
          const poke = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            )
            setPokemons((p) =>[...p, poke.data]) //copie le tabl et ajoute
        })
     }
     getPokemons()
}, [])

//fontion urlPokemon suivant
const nextPage = async ()=>{
  let res = await axios.get(nextUrl)

//fontion parcour et affiche tout les pokemon trouvé
  res.data.results.forEach(async (pokemon : TypePokemons) =>{
    const poke = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      )
      setPokemons((p) =>[...p, poke.data]) //copie le tabl et ajoute
  })
}

//fontion urlPokemon precedent
const prevPage = async ()=>{
  let res = await axios.get(prevUrl)

//fontion parcour et affiche tout les pokemon trouvé
  res.data.results.forEach(async (pokemon : TypePokemons) =>{
    const poke = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      )
      setPokemons((p) =>[...p, poke.data]) //copie le tabl et ajoute
  })
}
  return (
    <div className="App">
        <header className='pokemon-header'> Pokemon </header> <br/>
        <PokemonCollection pokemons={pokemons} />
        <button onClick={prevPage} className='backButton'>{'<<'}</button> 
        <button onClick={nextPage} className='nextButton'>{'>>'}</button>
    </div>
  );
}

export default App;
