import { useState } from 'react'
import MainLayout from '../../components/MainLayout'
import Search from '../../components/Search'
import { useFetchAllCharacters } from '../../hooks/useFetchAllCharacters'
import CardsList from '../../components/CardsList'
import CharacterCard from '../../components/CharacterCard'


import './styles.scss'

const Home = () => {
    const [filter, setFilter] = useState('')
    const { characters, isLoading, charactersCount } = useFetchAllCharacters(filter);

    return (
        <MainLayout>
            <Search
                setFilter={setFilter}
                isLoading={isLoading}
                charactersCount={charactersCount}
            />
            {isLoading ? <span>Loading...</span>
                : <CardsList data={characters} ChildComponent={CharacterCard} />
            }
        </MainLayout>

    )
}

export default Home