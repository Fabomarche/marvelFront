import Card from '../Card'
import character from '../../assets/character.svg'
import './styles.scss'

const CardsList = () => {
    const cardsData = Array.from({ length: 50 }, (_, index) => ({
        id: index + 1,
        name: `Super hero ${index + 1}`,
        imgSrc: character,
        isFavorite: false
    }));

    return (
        <div className='cards-list-container'>
            {cardsData.map(card => (
                <Card key={card.id} name={card.name} imgSrc={card.imgSrc} isFavorite={card.isFavorite} />
            ))}
        </div>
    )
}

export default CardsList