import heart from '../../assets/heart.svg'
import useStorageFavorites from '../../hooks/useStorageFavorites'

import './styles.scss'

const FavoriteCounter = () => {
  const { favorites } = useStorageFavorites('favoritesCharacters')

  return (
    <div className='favorite-counter-container'>
      <img src={heart} alt='heart icon' width={24} />
      <span>{favorites.length}</span>
    </div>
  )
}

export default FavoriteCounter