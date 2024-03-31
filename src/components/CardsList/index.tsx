import React from 'react';
import { CharacterType } from '../../infrastructure/CharacterTypes.ts';
import { ComicType } from '../../infrastructure/ComicTypes.ts';
import { FavoriteType } from '../../infrastructure/FavoritesTypes.ts';
import isCharacter from '../../helpers/isCharacter.ts';


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
                    id={item.id}
                    title={isCharacter(item) ? item.name : item.title}
                    imgSrc={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                />
            ))}
        </div>
    );
}

export default CardsList;
