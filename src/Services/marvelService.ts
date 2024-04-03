import axios from 'axios'
import environment from '../infrastructure/env'

export async function fetchAllCharacters(filter: string | null): Promise<any> {
    try {
        const url = `${environment.apiUrl}characters?limit=50&ts=1&apikey=${environment.publicKey}&hash=${environment.hash}${filter ? `&nameStartsWith=${filter}` : ''}`

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
        const url = `${environment.apiUrl}characters/${id}?ts=1&apikey=${environment.publicKey}&hash=${environment.hash}`

        const response = await axios.get(url)
        const data = response.data

        if (!data) return;
        return data
    } catch (err) {
        console.log("Marvel character could not be obtained: ", err)
        throw new Error("Marvel character could not be obtained.")
    }
}
export async function fetchCharacterComics(id: string): Promise<any> {
    try {
        const url = `${environment.apiUrl}characters/${id}/comics?orderBy=onsaleDate&ts=1&apikey=${environment.publicKey}&hash=${environment.hash}`

        const response = await axios.get(url)
        const data = response.data

        if (!data) return;
        return data

    } catch (err) {
        console.log("Marvel character's comics could not be obtained: ", err)
        throw new Error("Marvel character's comics could not be obtained.")
    }
}
