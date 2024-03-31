import CardsList from '../../components/CardsList'
import MainLayout from '../../components/MainLayout'
import useStorageFavorites from '../../hooks/useStorageFavorites'
import Search from '../../components/Search'
import CharacterCard from '../../components/CharacterCard'


import './styles.scss'

const FavoritesView = () => {
    const { favorites } = useStorageFavorites('favoritesCharacters')

    return (
        <MainLayout>
            <h2 className='layout-title'>Favorites</h2>
            <Search isLoading={false} charactersCount={favorites.length} />
            <CardsList data={favorites} ChildComponent={CharacterCard} />

        </MainLayout>
    )
}

export default FavoritesView