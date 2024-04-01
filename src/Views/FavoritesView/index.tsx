import { useState } from 'react'
import CardsList from '../../components/CardsList'
import MainLayout from '../../components/MainLayout'
import useStorageFavorites from '../../hooks/useStorageFavorites'
import Search from '../../components/Search'
import CharacterCard from '../../components/CharacterCard'


import './styles.scss'

const FavoritesView = () => {
    const { favorites, filterFavorites } = useStorageFavorites('favoritesCharacters')
    const [filter, setFilter] = useState('')

    console.log("aca", filterFavorites('AEGIS (TREY ROLLINS)'))
    return (
        <MainLayout>
            <h2 className='layout-title'>Favorites</h2>
            <Search isLoading={false} charactersCount={favorites.length} setFilter={setFilter} />
            <CardsList data={filterFavorites(filter)} ChildComponent={CharacterCard} />

        </MainLayout>
    )
}

export default FavoritesView