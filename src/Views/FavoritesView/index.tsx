import CardsList from '../../components/CardsList'
import MainLayout from '../../components/MainLayout'
import Search from '../../components/Search'


import './styles.scss'

const FavoritesView = () => {
    return (
        <MainLayout>
            <h2 className='layout-title'>Favorites</h2>
            <Search isLoading={false} charactersCount={0} />
            <CardsList data={[]} />

        </MainLayout>
    )
}

export default FavoritesView