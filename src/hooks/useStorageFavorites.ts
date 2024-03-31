import { useState, useEffect } from 'react';

const useStorageFavorites = (key: string) => {
    const [favorites, setFavorites] = useState<string[]>([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem(key);
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, [key]);

    const toggleFavorite = (cardId: string) => {
        const updatedFavorites = [...favorites];
        const index = updatedFavorites.indexOf(cardId);
        if (index === -1) {
            updatedFavorites.push(cardId);
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