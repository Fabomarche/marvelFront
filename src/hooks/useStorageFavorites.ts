import { useState, useEffect } from 'react';
import { FavoriteType } from '../infrastructure/FavoritesTypes';
import { StorageRepository, LocalStorageRepository } from '../infrastructure/repositories/StorageRepository';

const useStorageFavorites = (key: string) => {
    const [favorites, setFavorites] = useState<FavoriteType[]>([]);
    const [favoritesCount, setFavoritesCount] = useState<number>(0)

    const storageRepository = new StorageRepository(new LocalStorageRepository());

    useEffect(() => {
        const storedFavorites = storageRepository.getItem(key);
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
            setFavoritesCount(JSON.parse(storedFavorites).length)
        }
    }, [key, storageRepository]);

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
        storageRepository.setItem(key, JSON.stringify(updatedFavorites));
        console.log(favoritesCount)
    };

    const filterFavorites = (filter: string) => {
        const updatedFavorites = [...favorites];
        const filteredFavorites = updatedFavorites.filter(item => item.title.includes(filter))
        return filteredFavorites
    }

    return {
        favorites,
        toggleFavorite,
        isFavorite,
        favoritesCount,
        filterFavorites
    };
}

export default useStorageFavorites