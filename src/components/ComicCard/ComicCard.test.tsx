import { describe, it, afterEach, expect } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import ComicCard from '.'

import { parseComicTitle } from '../../helpers/parseComicTitle'

const mockComic = {
    id: 23,
    title: 'Hulk (2003) #520',
    imgSrc: 'http://i.annihil.us/u/prod/marvel/i/mg/f/00/5ba3c7cd5f1e2.jpg'

}

describe('ComicCard', (): void => {
    afterEach(cleanup)



    it('should render the ComicCard correctly', (): void => {
        const { comicName, comicYear } = parseComicTitle(mockComic.title)
        render(< ComicCard {...mockComic} />)

        const img = screen.getByAltText(mockComic.title)
        expect(img).toBeDefined()

        const title = screen.getByText(comicName)
        expect(title).toBeDefined()

        const year = screen.getByText(comicYear)
        expect(year).toBeDefined()

    })


})