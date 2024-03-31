import { useState } from 'react'
import MainLayout from '../../components/MainLayout'
import Search from '../../components/Search'
import { useFetchCharacters } from '../../hooks/useFetchCharacters'

import CardsList from '../../components/CardsList'

import './styles.scss'

const Home = () => {
    const [filter, setFilter] = useState('')
    const { characters, isLoading, charactersCount } = useFetchCharacters(filter);

    return (
        <MainLayout>
            <Search
                setFilter={setFilter}
                isLoading={isLoading}
                charactersCount={charactersCount}
            />
            {isLoading ? <span>Loading...</span>
                : <CardsList data={characters} />
            }
        </MainLayout>

    )
}

export default Home