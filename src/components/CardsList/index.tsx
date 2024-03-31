import React from 'react';
import { CharacterType, ComicType } from '../../infrastructure/CharacterTypes.ts';

import './styles.scss';

interface CardsListProps {
    data: (CharacterType | ComicType)[];
    ChildComponent: React.ComponentType<any>; // Tipo para el componente hijo
}

const CardsList: React.FC<CardsListProps> = ({ data, ChildComponent }) => {

    return (
        <div className='cards-list-container'>
            {data.map((item: CharacterType | ComicType) => (
                <ChildComponent
                    id={item.id}
                    name={item.name}
                    imgSrc={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                />
            ))}
        </div>
    );
}

export default CardsList;
