import MarvelAPIAdapter from '../../infrastructure/MarvelAPIAdapter.ts'
import axios from 'axios'

jest.mock('axios')

describe('MarvelAPIAdapter', ()=>{
    describe('getHeroes', ()=>{
        it('you should get the marvel heroes correctly',async () => {
            axios.get.mockResolvedValueOnce({ data: { heroes: [/* datos de héroes simulados */] } });
        })
    })
})