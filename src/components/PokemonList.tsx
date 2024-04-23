
interface Props {
    name: string,
    id: number,
    image: string
    type:string
}

function PokemonList(props : Props) {
    const { name, id, image, type } = props //destructuration

    //afficheOnePokemon
    function affPokemon (){
    
    }
  return (
    <div onClick={affPokemon}>
      <section className={` pokemon-list-container ${type}`}>
        <p className="pokemon-name"> #{id} </p>
        <p className="pokemon-name"> {name} </p>
        <img src={image} alt={name}  />
     </section>
    </div>
  )
}

export default PokemonList
