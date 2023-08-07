"use client"

import {useDispatch, useSelector} from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

import { RootState, AppDispatch } from '@/store'
import { setSearch } from '@/store/searchSlice'

import { Pokemon } from '@/types'
import PokemonTable from './PokemonTable'
import { pokemonApi } from '@/store/pokemonApi'
import { useEffect } from 'react'

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default function SearchInput() {
    const dispatch = useAppDispatch();
    const search = useAppSelector((state) => state.search.search)
    const startupPokemon = useAppSelector((state) => state.search.startupPokemon)
    const data = useAppSelector(
        (state) =>
            state.pokemonApi.queries[`search("${search}")`]?.data as Pokemon[]
    );

    useEffect(()=> {
        dispatch(pokemonApi.endpoints.search.initiate(search))
    }, [dispatch, search])
    
  return (
    <div className='text-center flex flex-col gap-4'>
        <h1>SearchInput</h1>
        <input className='mx-auto border-4 border-indigo-600 rounded-xl' type='text' value={search} 
        onChange={(e) => dispatch(setSearch(e.target.value))}
        />

        <PokemonTable pokemons={search.length ? data ?? [] : startupPokemon}/>
    </div>
  )
}