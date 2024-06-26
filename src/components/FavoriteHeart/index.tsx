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
        <button type='button' onClick={handleToogleFavorite} data-testid='heart-button'>
            {isFavorite ? <Heart className={'heart'} />
                : <EmptyHeart className={'heart'} />}
        </button>
    );
};

export default FavoriteHeart;
