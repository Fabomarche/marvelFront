import React from 'react';
import Heart from '../Icons/Heart';
import EmptyHeart from '../Icons/EmptyHeart';

interface HeartProps {
    isFavorite: boolean;
}

const FavoriteHeart: React.FC<HeartProps> = ({ isFavorite }) => {
    return (
        <>
            {isFavorite ? <Heart className={'heart'} /> : <EmptyHeart className={'heart'} />}
        </>
    );
};

export default FavoriteHeart;
