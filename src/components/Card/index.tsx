// import heart from '../../assets/heart.svg'
// import emptyHeart from '../../assets/empty-heart.svg'
import Heart from '../Icons/Heart'
import './styles.scss'

const Card = ({ key, name, imgSrc, isFavorite }) => {
    return (
        <div className='card-container' id={key}>
            <img src={imgSrc} alt={name} />

            <div className='card-inner-container'>

                <div className='card-rectangle'></div>
                <div className='card-info-container'>
                    <h3>{name}</h3>
                    {/* <img src={isFavorite ? heart : emptyHeart} /> */}
                    <Heart />
                </div>

            </div>

        </div>
    )
}

export default Card