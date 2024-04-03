import { createContext, useContext, Dispatch, SetStateAction } from 'react';
import { FavoriteType } from '../FavoritesTypes';

const initialFavorites: FavoriteType[] = []

const FavoritesContext = createContext<{
    favorites: FavoriteType[];
    setFavorites: Dispatch<SetStateAction<FavoriteType[]>>
}>({
    favorites: initialFavorites,
    setFavorites: () => { }
});

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
};

export default FavoritesContext;