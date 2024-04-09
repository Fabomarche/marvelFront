import FavoriteHeart from '../FavoriteHeart'
import useStorageFavorites from '../../hooks/useStorageFavorites';
import type { ResumeProps } from '../../infrastructure/Card';
import './styles.scss'

const CharacterResume: React.FC<ResumeProps> = ({ id, title, imgSrc, description }) => {
    const { toggleFavorite, isFavorite } = useStorageFavorites('favoritesCharacters')

    const card = {
        id: id,
        title: title,
        imgSrc: imgSrc
    }

    const handleToogleFavorite = () => {
        toggleFavorite(card)

    }
    return (
        <div className='resume-container'>
            <img src={imgSrc} alt={title} />
            <div className='resume-info-container'>
                <div className='resume-title-container'>
                    <h2>{title}</h2>
                    <FavoriteHeart isFavorite={isFavorite(card)} handleToogleFavorite={handleToogleFavorite} />
                </div>
                <p>
                    {description}
                </p>
            </div>

        </div>
    )
}

export default CharacterResume