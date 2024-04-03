import { useEffect } from 'react';
import { FavoriteType } from '../infrastructure/Card';
import { useFavorites } from '../infrastructure/context/FavoritesContext';
import { StorageRepository, LocalStorageRepository } from '../infrastructure/repositories/StorageRepository';

const useStorageFavorites = (key: string) => {
    const { favorites, setFavorites } = useFavorites();

    const storageRepository = new StorageRepository(new LocalStorageRepository());
    const storedFavorites = storageRepository.getItem(key);

    useEffect(() => {
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, [storedFavorites, setFavorites]);

    const isFavorite = (card: FavoriteType) => {
        return favorites.some((item: FavoriteType) => item.id === card.id);
    };

    const toggleFavorite = (card: FavoriteType) => {
        const updatedFavorites = [...favorites];

        const index = updatedFavorites.findIndex(item => item.id === card.id)

        if (index === -1) {
            updatedFavorites.push(card);
        } else {
            updatedFavorites.splice(index, 1);
        }
        setFavorites(updatedFavorites);
        storageRepository.setItem(key, JSON.stringify(updatedFavorites));
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
        filterFavorites
    };
}

export default useStorageFavorites