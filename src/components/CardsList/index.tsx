import React from 'react';
import type { CharacterType } from '../../infrastructure/CharacterTypes.ts';
import type { ComicType } from '../../infrastructure/ComicTypes.ts';
import type { FavoriteType } from '../../infrastructure/Card.ts';
import { isCharacter, IsImgSrc } from '../../helpers/isCharacter.ts';


import './styles.scss';

interface CardsListProps {
    data: (CharacterType | ComicType | FavoriteType)[];
    ChildComponent: React.ComponentType<any>;
}

const CardsList: React.FC<CardsListProps> = ({ data, ChildComponent }) => {

    return (
        <div className='cards-list-container'>
            {data.map((item: CharacterType | ComicType | FavoriteType) => (
                <ChildComponent
                    key={item.id}
                    id={item.id}
                    title={isCharacter(item) ? item.name : item.title}
                    imgSrc={IsImgSrc(item) ? item.imgSrc : `${item.thumbnail.path}.${item.thumbnail.extension}`}
                />
            ))}
        </div>
    );
}

export default CardsList;
