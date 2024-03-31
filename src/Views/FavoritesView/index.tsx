import MainLayout from '../../components/MainLayout'
import Search from '../../components/Search'
import { useFetchCharacters } from '../../hooks/useFetchCharacters'
import CardsList from '../../components/CardsList'

import './styles.scss'

const FavoritesView = () => {
    const [isLoading, characters] = useFetchCharacters('spider')
    return (
        <MainLayout>
            <h2 className='layout-title'>Favorites</h2>
            <Search />
            {isLoading ? <span>Loading...</span>
                : <CardsList data={characters} />
            }
        </MainLayout>
    )
}

export default FavoritesView