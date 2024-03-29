import { useEffect, useState } from "react"
import axios from 'axios'

export const useFetchCharacters = () => {
    const [characters, setCharacters] = useState<any>([])
    const [charactersCount, setCharactersCount] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    console.log(`${import.meta.env.VITE_MARVEL_BASE_URL}/characters?ts=1&apikey=${import.meta.env.VITE_MARVEL_PUBLIC_KEY}&hash=${import.meta.env.VITE_MARVEL_HASH}`)

    const getCharacters = async () => {
        setIsLoading(true)
        try {
            const url = `${import.meta.env.VITE_MARVEL_BASE_URL}/characters?limit=50&ts=1&apikey=${import.meta.env.VITE_MARVEL_PUBLIC_KEY}&hash=${import.meta.env.VITE_MARVEL_HASH}`



            const response = await axios.get(url)
            const data = response.data
            console.log({ data })
            if (!data) return;
            setCharactersCount(data.data.count)
            setCharacters(data.data.results);
        } catch (err) {
            console.log("Marvel characters could not be obtained: ", err)
            throw new Error("Marvel characters could not be obtained.")
        } finally {
            setIsLoading(true)
        }
    }

    useEffect(() => {
        getCharacters()
    }, [])
    return [characters, charactersCount, isLoading];
}