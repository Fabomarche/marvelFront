import FavoriteHeart from '../FavoriteHeart'
import './styles.scss'

interface Props {
    name: string;
    description: string;
    imgSrc: string;
}

const CharacterResume: React.FC<Props> = ({ name, description, imgSrc }) => {
    return (
        <div className='resume-container'>
            <img src={imgSrc} alt={name} />
            <div className='resume-info-container'>
                <div className='resume-title-container'>
                    <h2>{name}</h2>
                    <FavoriteHeart isFavorite={false} />
                </div>
                <p>
                    {description}
                </p>
            </div>

        </div>
    )
}

export default CharacterResume