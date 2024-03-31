import { useEffect, useState } from "react"
import { fetchCharacterComics } from "../Services/marvelService"

export const useFetchCharacterComics = (id: string) => {
    const [comics, setComics] = useState<any>([])
    const [isLoadingComics, setIsLoadingComics] = useState(true)



    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchCharacterComics(id);
                setComics(data.data.results);
                setIsLoadingComics(false)
            } catch (err) {
                console.log("the characters could not be fetched:", err)
                setIsLoadingComics(false);
            }
        };

        fetchData();
    }, [id])



    return { comics, isLoadingComics };
}