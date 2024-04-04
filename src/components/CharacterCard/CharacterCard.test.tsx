import { describe, it, afterEach, expect, beforeEach } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import CharacterCard from '.'

const mockCharater = {
    id: 23,
    title: 'Hulk',
    imgSrc: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg'

}


describe('Character Card', (): void => {

    afterEach(cleanup)

    it('Should render and navigate to detail page by click on img', (): void => {
        const history = createMemoryHistory();
        render(
            <Router location={history.location}
                navigator={history}>
                < CharacterCard {...mockCharater} />
            </Router>
        )
        const img = screen.getByAltText(mockCharater.title)
        expect(img).toBeDefined()

        fireEvent.click(img)
        const currentUrl = history.location.pathname
        expect(currentUrl).toBe(`/detail/${mockCharater.id}`);

    })

    it('Should render and navigate to detail page by click on title', (): void => {
        const history = createMemoryHistory();
        render(
            <Router location={history.location}
                navigator={history}>
                < CharacterCard {...mockCharater} />
            </Router>
        )
        const title = screen.getByText(mockCharater.title)
        expect(title).toBeDefined()

        fireEvent.click(title)
        const currentUrl = history.location.pathname
        expect(currentUrl).toBe(`/detail/${mockCharater.id}`);

    })
})