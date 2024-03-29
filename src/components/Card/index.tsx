
import Heart from '../Icons/Heart'
import EmptyHeart from '../Icons/EmptyHeart'
import './styles.scss'

const Card = ({ key, name, imgSrc, isFavorite }) => {
    return (
        <div className='card-container' id={key}>
            <img src={imgSrc} alt={name} />

            <div className='card-inner-container'>

                <div className='card-rectangle'></div>
                <div className='card-info-container'>
                    <h3>{name}</h3>
                    {true ? <Heart className={'heart'} />
                        : <EmptyHeart className={'heart'} />

                    }

                </div>

            </div>

        </div>
    )
}

export default Card