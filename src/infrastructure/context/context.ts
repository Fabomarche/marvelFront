import { createContext, useContext } from "react";
import { CharacterType } from "../CharacterTypes";
import axios from 'axios'

const CharactersContext = createContext({
    characters: [] as CharacterType[],
    addCharacters: (text: string) => { }
})

export const CharacterStore = () => {
    const addCharacters = async (text: string) => {
        try {
            const url = `${import.meta.env.VITE_MARVEL_BASE_URL}/characters?limit=50&ts=1&apikey=${import.meta.env.VITE_MARVEL_PUBLIC_KEY}&hash=${import.meta.env.VITE_MARVEL_HASH}${text && `&nameStartsWith=${text}`}`

            const response = await axios.get(url)
            const data = response.data
            console.log({ data })
            if (!data) return;
            return data
        } catch (err) {
            console.log("Marvel characters could not be obtained: ", err)
            throw new Error("Marvel characters could not be obtained.")
        }
    }

    return addCharacters
}

export const useCharactersContext = () => useContext(CharactersContext)