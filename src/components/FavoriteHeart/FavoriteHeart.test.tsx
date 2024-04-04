import { describe, it, afterEach, expect } from 'vitest'
import { cleanup, render, screen, fireEvent } from '@testing-library/react'
import FavoriteHeart from '.'



describe('FavoriteHeart', (): void => {
    afterEach(cleanup)


    it('It should toggle between displaying the filled heart (Heart) and the empty heart (EmptyHeart) when clicking the button.', (): void => {
        let isFavorite = false
        const toggleFavorite = (): void => {
            isFavorite = !isFavorite;
        };
        render(<FavoriteHeart isFavorite={isFavorite} handleToogleFavorite={toggleFavorite} />);

        expect(isFavorite).toBe(false);
        const emptyHeart = screen.getByTestId('empty-heart')
        expect(emptyHeart).toBeDefined()

        const heartButton = screen.getByTestId('heart-button');

        fireEvent.click(heartButton);

        expect(isFavorite).toBe(true);


        render(<FavoriteHeart isFavorite={isFavorite} handleToogleFavorite={toggleFavorite} />);

        const heartFilled = screen.getByTestId('heart')
        expect(heartFilled).toBeDefined()

    })



})