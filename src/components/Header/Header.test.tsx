import { describe, it, afterEach, expect } from 'vitest'
import { cleanup, render, fireEvent, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Header from '.'



describe('Header', (): void => {
    afterEach(cleanup)

    it('marvel logo should redirect to / ', (): void => {
        const history = createMemoryHistory();
        render(
            <MemoryRouter history={history}>
                <Header />
            </MemoryRouter>
        )
        const homeLink = screen.getByTestId('to-home-link')

        fireEvent.click(homeLink)
        const currentUrl = history.location.pathname
        expect(currentUrl).toBe('/');


    })

    it('favorite count should redirect to /favorites ', (): void => {
        const history = createMemoryHistory();
        render(
            <MemoryRouter history={history}>
                <Header />
            </MemoryRouter>
        )

        const favoriteLink = screen.getByTestId('to-favorites-link')

        fireEvent.click(favoriteLink)
        expect(history.location.pathname).toBe('/')
    })
})