import Preloader from "@/components/Preloader";
import Providers from "@/components/Provider";
import SearchInput from "@/components/SearchInput";
import { store } from "@/store";
import { setStartupPokemon } from "@/store/searchSlice";

export default async function Home() {
  const req = await fetch('http://localhost:3000/api/search');
  const data = await req.json()
  store.dispatch(setStartupPokemon(data))

  return (
    <main className="max-w-xl mx-auto text-center">
      <Preloader pokemons={data}/>
      <Providers>
        <SearchInput/>
      </Providers>
    </main>
)
}
