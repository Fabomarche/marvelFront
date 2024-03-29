import heart from '../../assets/heart.svg'
import './styles.scss'

const FavoriteCounter = () => {
  return (
    <div className='favorite-counter-container'>
      <img src={heart} alt='heart icon' width={24} />
      <span>3</span>
    </div>
  )
}

export default FavoriteCounter