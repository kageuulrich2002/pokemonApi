import { TypePokemon} from "../interface" //apple type pokemon
import PokemonList from "./PokemonList"

interface Props {
  pokemons : TypePokemon[]
}

function PokemonCollection ( props : Props )  {
      const { pokemons } =props //recupere de diff pokemon
      console.log(pokemons)
    return (
        <div className="collection-container">
                {
                  pokemons.map((pokemon) => {
                    return <PokemonList
                       key={pokemon.id}
                       name={pokemon.name}
                        id={pokemon.id} 
                        image={pokemon.sprites.front_default}
                        type={pokemon.types[0].type.name} />
                  })
                }
        </div> 
     
    )

}

export default PokemonCollection
