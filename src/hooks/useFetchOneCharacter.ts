import { useEffect, useState } from "react"
import { fetchOneCharacter } from "../Services/marvelService"

export const useFetchOneCharacter = (id: string) => {
    const [character, setCharacter] = useState<any>([])
    const [isLoading, setIsLoading] = useState(true)
    const [characterComics, setCharacterComics] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchOneCharacter(id);
                setCharacter(data.data.results[0]);
                setCharacterComics(data.data.results[0].comics.items)
                setIsLoading(false)
            } catch (err) {
                console.log("the characters could not be fetched:", err)
                setIsLoading(false);
            }
        };

        fetchData();
    }, [id])



    return { character, isLoading, characterComics };
}