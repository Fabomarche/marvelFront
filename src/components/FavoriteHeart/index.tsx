import React from 'react';
import Heart from '../Icons/Heart';
import EmptyHeart from '../Icons/EmptyHeart';

import './styles.scss'

interface HeartProps {
    isFavorite: boolean;
    handleToogleFavorite: () => void;
}

const FavoriteHeart: React.FC<HeartProps> = ({ isFavorite, handleToogleFavorite }) => {

    return (
        <button onClick={handleToogleFavorite}>
            {isFavorite ? <Heart className={'heart'} />
                : <EmptyHeart className={'heart'} />}
        </button>
    );
};

export default FavoriteHeart;
