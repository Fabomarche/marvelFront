import axios from 'axios'

export default class MarvelAPIAdapter {

    async getHeroes(): Promise<any> {
        try {
            const url = `${process.env.REACT_APP_BASE_URL}/characters?ts=1&apikey=${process.env.REACT_APP_MARVEL_PUBLIC_KEY}&hash=${process.env.REACT_APP_MARVEL_HASH}`

            const response = await axios.get(url)

            return response.data

        } catch (err) {
            console.log("Marvel characters could not be obtained: ", err)
            throw new Error("Marvel characters could not be obtained.")
        }

    }
}

//https://gateway.marvel.com/v1/public/characters?ts=1&apikey=ba2ea25a9fabf11041afbbe08d276e4c&hash=279b5b8aebf49b9f65a28728f5e6f1ab



