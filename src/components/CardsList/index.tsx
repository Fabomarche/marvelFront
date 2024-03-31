import CharacterCard from '../CharacterCard'
import { CharacterType } from '../../infrastructure/CharacterTypes.ts'

import './styles.scss'

interface CardsListProps {
    data: CharacterType[];
}

const CardsList = ({ data }: CardsListProps) => {

    return (
        <div className='cards-list-container'>
            {data.map((character: CharacterType) => (
                <>
                    <CharacterCard
                        id={character.id}
                        name={character.name}
                        imgSrc={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                    />
                </>
            ))}
        </div>
    )
}

export default CardsList