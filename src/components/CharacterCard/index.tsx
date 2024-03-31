import FavoriteHeart from '../FavoriteHeart';
import './styles.scss'

interface CardProps {
    key: string;
    name: string;
    imgSrc: string;
    isFavorite: boolean;
}

const CharacterCard: React.FC<CardProps> = ({ key, name, imgSrc, isFavorite }) => {
    return (
        <div className='character-card-container' id={key}>
            <img src={imgSrc} alt={name} />

            <div className='card-inner-container'>

                <div className='card-rectangle'></div>
                <div className='card-info-container'>
                    <h3>{name}</h3>
                    <FavoriteHeart isFavorite={true} />

                </div>

            </div>

        </div>
    )
}

export default CharacterCard