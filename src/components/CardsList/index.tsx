import React from 'react';
import { CharacterType, ComicType } from '../../infrastructure/CharacterTypes.ts';

import './styles.scss';

interface CardsListProps {
    data: (CharacterType | ComicType)[];
    ChildComponent: React.ComponentType<any>;
}

const CardsList: React.FC<CardsListProps> = ({ data, ChildComponent }) => {

    return (
        <div className='cards-list-container'>
            {data.map((item: CharacterType | ComicType, index: number) => (
                <ChildComponent
                    id={item.id || index}
                    title={item.name}
                    imgSrc={item.thumbnail ? `${item.thumbnail.path}.${item.thumbnail.extension}` : item.resourceURI}
                />
            ))}
        </div>
    );
}

export default CardsList;
