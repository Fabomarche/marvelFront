import { describe, it, afterEach, expect } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import CardList from '.'
import CharacterCard from '../CharacterCard'

const mockCardList = {
    data: [
        {
            id: 23,
            title: 'Hulk',
            imgSrc: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg'
        },
        {
            id: 25,
            title: 'spider',
            imgSrc: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg'
        }
    ],
    ChildComponent: CharacterCard
}

describe('CardList', (): void => {
    afterEach(cleanup)
    it('Should render the correct number of rendered cards', (): void => {
        const history = createMemoryHistory();
        render(
            <Router location={history.location}
                navigator={history}>
                < CardList {...mockCardList} />
            </Router>
        )
        const cards = screen.getAllByTestId('character-card')
        expect(cards).toHaveLength(mockCardList.data.length)
    })

    it('Should render the title and image of the cards', (): void => {
        const history = createMemoryHistory();
        render(
            <Router location={history.location}
                navigator={history}>
                < CardList {...mockCardList} />
            </Router>
        )

        mockCardList.data.map(card => {
            const title = screen.getByText(card.title)
            expect(title).toBeDefined()

            const img = screen.getByAltText(card.title)
            expect(img).toBeDefined()
        })
    })

})