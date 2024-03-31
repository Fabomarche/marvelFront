import { useState, useEffect } from 'react';
import { FavoriteType } from '../infrastructure/FavoritesTypes';

const useStorageFavorites = (key: string) => {
    const [favorites, setFavorites] = useState<FavoriteType[]>([]);
    const [favoritesCount, setFavoritesCount] = useState<number>(0)

    useEffect(() => {
        const storedFavorites = localStorage.getItem(key);
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
            setFavoritesCount(JSON.parse(storedFavorites).length)
        }
    }, [key]);

    const isFavorite = (card: FavoriteType) => {
        return favorites.some(item => item.id === card.id);
    };

    const toggleFavorite = (card: FavoriteType) => {
        const updatedFavorites = [...favorites];

        const index = updatedFavorites.findIndex(item => item.id === card.id)

        if (index === -1) {
            updatedFavorites.push(card);
        } else {
            updatedFavorites.splice(index, 1);
        }
        setFavoritesCount(updatedFavorites.length)
        setFavorites(updatedFavorites);
        localStorage.setItem(key, JSON.stringify(updatedFavorites));
        console.log(favoritesCount)
    };

    return {
        favorites,
        toggleFavorite,
        isFavorite,
        favoritesCount
    };
}

export default useStorageFavorites