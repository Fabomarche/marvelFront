import MainLayout from '../../components/MainLayout'
import Search from '../../components/Search'
import { useFetchCharacters } from '../../hooks/useFetchCharacters'
import CardsList from '../../components/CardsList'

import './styles.scss'

const Home = () => {
    const [isLoading, characters] = useFetchCharacters(null)
    console.log(isLoading, "aca", characters)
    return (
        <MainLayout>
            <Search />
            {isLoading ? <span>Loading...</span>
                : <CardsList data={characters} />
            }
        </MainLayout>

    )
}

export default Home