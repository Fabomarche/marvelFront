import { useState } from 'react';
import FavoriteHeart from '../FavoriteHeart';
import { Link } from 'react-router-dom';
import { CardProps } from '../../infrastructure/CardProps';

import './styles.scss'

const CharacterCard: React.FC<CardProps> = ({ id, title, imgSrc }) => {
    const [toogleFavorite, setToogleFavorite] = useState(false)

    return (
        <Link to={`/detail/${id}`}>

            <div className='character-card-container' id={`${id}`}>
                <img src={imgSrc} alt={title} />

                <div className='card-inner-container'>

                    <div className='card-rectangle'></div>
                    <div className='card-info-container'>
                        <h3>{title}</h3>
                        <FavoriteHeart isFavorite={toogleFavorite} id='favoriteCharacters' />

                    </div>

                </div>

            </div>
        </Link>
    )
}

export default CharacterCard