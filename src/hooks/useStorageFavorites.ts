import { useState, useEffect } from 'react';
import { FavoriteType } from '../infrastructure/FavoritesTypes';
import { CharacterType } from '../infrastructure/CharacterTypes';

const useStorageFavorites = (key: string) => {
    const [favorites, setFavorites] = useState<FavoriteType[]>([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem(key);
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, [key]);

    const toggleFavorite = (card: CharacterType) => {
        const updatedFavorites = [...favorites];

        const index = updatedFavorites.findIndex(item => item.id === card.id)

        if (index === -1) {
            const favoriteCard = {
                id: card.id,
                title: card.name,
                thumbnail: card.thumbnail
            }
            updatedFavorites.push(favoriteCard);
        } else {
            updatedFavorites.splice(index, 1);
        }
        setFavorites(updatedFavorites);
        localStorage.setItem(key, JSON.stringify(updatedFavorites));
    };

    return {
        favorites,
        toggleFavorite,
    };
}

export default useStorageFavorites