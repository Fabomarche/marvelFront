import { describe, it, afterEach, expect } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import CharacterResumeDetail from '.'

const mockCharater = {
    id: 23,
    title: 'Hulk',
    description: 'lorem ipsu lorem ipsulorem ipsulorem ipsulorem ipsu',
    imgSrc: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16.jpg'

}

describe('CharacterResumeDetail', (): void => {
    afterEach(cleanup)

    it('Should render character image and information', (): void => {
        render(<CharacterResumeDetail {...mockCharater} />)
        expect(screen.getByAltText(mockCharater.title)).toBeDefined()
        expect(screen.getByText(mockCharater.title)).toBeDefined()
        expect(screen.getByText(mockCharater.description)).toBeDefined()
    })
})