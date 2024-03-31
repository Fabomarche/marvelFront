import character from '../../assets/character.svg'
import FavoriteHeart from '../FavoriteHeart'
import './styles.scss'

const CharacterResume = () => {
    return (
        <div className='resume-container'>
            <img src={character} alt={'a'} />
            <div className='resume-info-container'>
                <div className='resume-title-container'>
                    <h2>ADAM WARLOCK</h2>
                    <FavoriteHeart isFavorite={false} />
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aperiam, culpa est alias quasi vitae. Veniam, suscipit placeat at fuga mollitia repellendus! Vel veritatis aspernatur tempore fuga odio rem assumenda.
                </p>
            </div>

        </div>
    )
}

export default CharacterResume