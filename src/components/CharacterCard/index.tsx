import FavoriteHeart from '../FavoriteHeart';
import { useNavigate } from 'react-router-dom';
import { CardProps } from '../../infrastructure/Card';
import useStorageFavorites from '../../hooks/useStorageFavorites';

import './styles.scss'

const CharacterCard: React.FC<CardProps> = ({ id, title, imgSrc }) => {
    const { toggleFavorite, isFavorite } = useStorageFavorites('favoritesCharacters')
    const navigate = useNavigate();

    const card = {
        id: id,
        title: title,
        imgSrc: imgSrc
    }

    const handleToogleFavorite = () => {
        toggleFavorite(card)
    }

    const handleCardClick = () => {
        navigate(`/detail/${id}`);
    }
    return (

        <div className='character-card-container' id={`${id}`} key={id} data-testid='character-card'>
            <img src={imgSrc} alt={title} onClick={handleCardClick} />

            <div className='card-inner-container'>

                <div className='card-rectangle'></div>
                <div className='card-info-container'>
                    <h3 onClick={handleCardClick}>{title}</h3>
                    <FavoriteHeart isFavorite={isFavorite(card)} handleToogleFavorite={handleToogleFavorite} />

                </div>

            </div>

        </div>


    )
}

export default CharacterCard