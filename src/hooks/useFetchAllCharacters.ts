import { useEffect, useState } from "react"
import { fetchAllCharacters } from "../Services/marvelService"

export const useFetchAllCharacters = (filter: string | null) => {
    const [characters, setCharacters] = useState<any>([])
    const [isLoading, setIsLoading] = useState(true)
    const [charactersCount, setCharactersCount] = useState(0)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchAllCharacters(filter);
                setCharactersCount(data.data.count)
                setCharacters(data.data.results);
                setIsLoading(false)
            } catch (err) {
                console.log("the characters could not be fetched:", err)
                setIsLoading(false);
            }
        };

        fetchData();
    }, [filter])



    return { characters, isLoading, charactersCount };
}