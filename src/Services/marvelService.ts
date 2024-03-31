import axios from 'axios'

export async function fetchAllCharacters(filter: string | null): Promise<any> {
    try {
        const url = `${import.meta.env.VITE_MARVEL_BASE_URL}characters?limit=50&ts=1&apikey=${import.meta.env.VITE_MARVEL_PUBLIC_KEY}&hash=${import.meta.env.VITE_MARVEL_HASH}${filter ? `&nameStartsWith=${filter}` : ''}`

        const response = await axios.get(url)
        const data = response.data

        if (!data) return;
        return data
    } catch (err) {
        console.log("Marvel characters could not be obtained: ", err)
        throw new Error("Marvel characters could not be obtained.")
    }
}

export async function fetchOneCharacter(id: string): Promise<any> {
    try {
        const url = `${import.meta.env.VITE_MARVEL_BASE_URL}characters/${id}?ts=1&apikey=${import.meta.env.VITE_MARVEL_PUBLIC_KEY}&hash=${import.meta.env.VITE_MARVEL_HASH}`

        const response = await axios.get(url)
        const data = response.data

        if (!data) return;
        return data
    } catch (err) {
        console.log("Marvel characters could not be obtained: ", err)
        throw new Error("Marvel characters could not be obtained.")
    }
}
