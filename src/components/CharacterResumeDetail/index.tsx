import FavoriteHeart from '../FavoriteHeart'
import useStorageFavorites from '../../hooks/useStorageFavorites';
import './styles.scss'

interface Props {
    id: number;
    name: string;
    description: string;
    imgSrc: string;
}

const CharacterResume: React.FC<Props> = ({ id, name, imgSrc, description }) => {
    const { toggleFavorite, isFavorite } = useStorageFavorites('favoritesCharacters')

    const card = {
        id: id,
        title: name,
        imgSrc: imgSrc
    }

    const handleToogleFavorite = () => {
        toggleFavorite(card)

    }
    return (
        <div className='resume-container'>
            <img src={imgSrc} alt={name} />
            <div className='resume-info-container'>
                <div className='resume-title-container'>
                    <h2>{name}</h2>
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