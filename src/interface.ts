export interface TypePokemon{//type 01 pokemon
    id: number,
    name: string,
    sprites: {
      front_default : string
    }
    types: {
      type:{
        name: string
      }
    }[]
  }
  
