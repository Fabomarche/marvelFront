import { useEffect, useState } from "react"
import axios from 'axios'

export const useFetchCharacters = (name: string | null) => {
    const [characters, setCharacters] = useState<any>([])
    const [charactersCount, setCharactersCount] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    const getCharacters = async (text: string | null) => {
        setIsLoading(true)
        try {
            const url = `${import.meta.env.VITE_MARVEL_BASE_URL}characters?limit=50&ts=1&apikey=${import.meta.env.VITE_MARVEL_PUBLIC_KEY}&hash=${import.meta.env.VITE_MARVEL_HASH}${text ? `&nameStartsWith=${text}` : ''}`

            const response = await axios.get(url)
            const data = response.data

            if (!data) return;
            setCharactersCount(data.data.count)
            setCharacters(data.data.results);
            setIsLoading(false)
        } catch (err) {
            console.log("Marvel characters could not be obtained: ", err)
            throw new Error("Marvel characters could not be obtained.")
        }
    }

    useEffect(() => {
        getCharacters(name)
    }, [])
    return [isLoading, characters, charactersCount];
}