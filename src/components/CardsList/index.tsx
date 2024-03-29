import Card from '../Card'
import { useFetchCharacters } from '../../hooks/useFetchCharacters'
import { CharacterType } from '../../domain/CharacterTypes'

import './styles.scss'


const CardsList = () => {
    const [characters, isLoading] = useFetchCharacters()

    return (
        <div className='cards-list-container'>
            {characters.map((character: CharacterType) => (
                <Card
                    key={character.id}
                    name={character.name}
                    imgSrc={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    isFavorite={false}
                />
            ))}
        </div>
    )
}

export default CardsList