import { Pokemon } from "@/types"
import PokemonTable from "./PokemonTable"
import {store} from "@/store"

export default function SSRPokemonTable() {

  return (
    <div>
        <PokemonTable pokemons={store.getState().search.startupPokemon}/>
    </div>
  )
}