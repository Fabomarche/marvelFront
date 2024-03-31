import { useEffect, useState } from 'react'
import heart from '../../assets/heart.svg'
import useStorageFavorites from '../../hooks/useStorageFavorites'

import './styles.scss'

const FavoriteCounter = () => {
  const { favoritesCount } = useStorageFavorites('favoritesCharacters')

  console.log(favoritesCount)



  return (
    <div className='favorite-counter-container'>
      <img src={heart} alt='heart icon' width={24} />
      <span>{favoritesCount}</span>
    </div>
  )
}

export default FavoriteCounter