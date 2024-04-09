import { useEffect, useState } from 'react'
import CardsList from '../../components/CardsList'
import MainLayout from '../../components/MainLayout'
import useStorageFavorites from '../../hooks/useStorageFavorites'
import Search from '../../components/Search'
import CharacterCard from '../../components/CharacterCard'


import './styles.scss'

const FavoritesView = () => {
    const { favorites, filterFavorites } = useStorageFavorites('favoritesCharacters')
    const [filter, setFilter] = useState('')
    const [favoritesCount, setFavoritesCount] = useState(0)

    useEffect(() => {
        const count = filter ? filterFavorites(filter).length : favorites.length;
        setFavoritesCount(count);

    }, [favorites, filter, filterFavorites])

    return (
        <div className='favorites-view'>
            <MainLayout>
                <h2 className='layout-title'>Favorites</h2>
                <Search isLoading={false} charactersCount={favoritesCount} setFilter={setFilter} />
                <CardsList data={filterFavorites(filter)} ChildComponent={CharacterCard} />
            </MainLayout>
        </div>
    )
}

export default FavoritesView