import React from 'react';
import Heart from '../Icons/Heart';
import EmptyHeart from '../Icons/EmptyHeart';
import useStorageFavorites from '../../hooks/useStorageFavorites';

import './styles.scss'

interface HeartProps {
    isFavorite: boolean;
    key: string
}

const FavoriteHeart: React.FC<HeartProps> = ({ isFavorite, key }) => {
    const { favorites, toggleFavorite } = useStorageFavorites(key)

    return (
        <button onClick={() => { }}>
            {isFavorite ? <Heart className={'heart'} />
                : <EmptyHeart className={'heart'} />}
        </button>
    );
};

export default FavoriteHeart;
